/*
* @/lib/utils.ts
* This file is used to create a custom classnames function that merges the tailwind classes with the custom classes
* Code: @aurelienLRY
 */

/*  Librairie */ 
import  {clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge tailwind classes with custom classes
 * @param {ClassValue[]} inputs - The classes to merge
 * @returns {string} - The merged classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
