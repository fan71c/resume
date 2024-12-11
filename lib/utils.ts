import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validateString = (str: unknown, maxLength: number) => {
    return !(!str || typeof str !== 'string' || str.length > maxLength)
}


export const getErrorMessage = (error: unknown): string => {
    let message: string;
    if (error instanceof Error) {
        message = error.message
    } else if (error && typeof error === 'object' && "message" in error) {
        message = String(error.message)
    } else if (typeof error === 'string') {
        message = error
    } else {
        message = "Unknown error"
    }
    return message;
}
