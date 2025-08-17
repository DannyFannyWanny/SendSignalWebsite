import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

// Validation schema (same as frontend)
const waitlistSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  city: z.string().min(2),
  universityCompany: z.string().optional(),
  platform: z.enum(["ios", "android", "both"]),
  honeypot: z.string().max(0), // Must be empty
});

type WaitlistEntryData = {
  name: string;
  email: string;
  city: string;
  universityCompany?: string;
  platform: "ios" | "android" | "both";
  ip?: string;
};

type WaitlistEntry = WaitlistEntryData & {
  id: string;
  createdAt: string;
};

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  return process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY;
};

// Local JSON file storage
async function saveToLocalFile(entry: WaitlistEntryData) {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "waitlist.json");
  
  try {
    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });
    
    // Read existing data
    let existingData: WaitlistEntry[] = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch {
      // File doesn't exist or is empty, start with empty array
    }
    
    // Add new entry
    const newEntry: WaitlistEntry = {
      ...entry,
      id: `entry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    
    existingData.push(newEntry);
    
    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));
    
    return newEntry;
  } catch (error) {
    console.error("Error saving to local file:", error);
    throw new Error("Failed to save to local storage");
  }
}

// Supabase storage (placeholder - you can implement this)
async function saveToSupabase(entry: WaitlistEntryData) {
  // This is a placeholder - you would implement actual Supabase integration here
  // For now, we'll just log and return success
  console.log("Would save to Supabase:", entry);
  
  return {
    ...entry,
    id: `supabase_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = waitlistSchema.parse(body);
    
    // Check honeypot
    if (validatedData.honeypot) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }
    
    // Prepare entry data
    const entryData: WaitlistEntryData = {
      name: validatedData.name,
      email: validatedData.email.toLowerCase().trim(),
      city: validatedData.city,
      universityCompany: validatedData.universityCompany,
      platform: validatedData.platform,
      ip: request.headers.get("x-forwarded-for") || "unknown",
    };
    
    // Save to appropriate storage
    let savedEntry;
    if (isSupabaseConfigured()) {
      savedEntry = await saveToSupabase(entryData);
    } else {
      savedEntry = await saveToLocalFile(entryData);
    }
    
    // Log successful submission
    console.log("New waitlist entry:", {
      id: savedEntry.id,
      email: savedEntry.email,
      city: savedEntry.city,
      platform: savedEntry.platform,
      timestamp: savedEntry.createdAt,
    });
    
    return NextResponse.json({
      success: true,
      message: "Successfully joined waitlist",
      id: savedEntry.id,
    });
    
  } catch (error) {
    console.error("Waitlist API error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: "Validation failed" },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (isSupabaseConfigured()) {
      // Return placeholder for Supabase
      return NextResponse.json({
        message: "Supabase configured - use Supabase client to fetch data",
        count: "N/A",
      });
    }
    
    // Read from local file
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "waitlist.json");
    
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      const data = JSON.parse(fileContent);
      
      return NextResponse.json({
        message: "Local JSON storage",
        count: data.length,
        entries: data,
      });
    } catch {
      return NextResponse.json({
        message: "Local JSON storage",
        count: 0,
        entries: [],
      });
    }
    
  } catch (error) {
    console.error("Error reading waitlist data:", error);
    return NextResponse.json(
      { error: "Failed to read data" },
      { status: 500 }
    );
  }
}
