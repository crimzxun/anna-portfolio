import { clsx, type ClassValue } from "clsx"  // allows to conditionally join class names
import { twMerge } from "tailwind-merge"      // resolves class conflicts by keeping only the last one

// allows conditional classes and resolves Tailwind conflicts in one go
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
