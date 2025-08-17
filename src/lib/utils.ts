import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export theme utilities for convenience
export { 
  spacing, 
  typography, 
  borderRadius, 
  shadows, 
  motion, 
  components, 
  cssVariables, 
  utils 
} from "./theme";
