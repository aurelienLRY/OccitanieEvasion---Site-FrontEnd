/*
 * @/lib/actions/getSpots.ts
 * Get all spots from the database
 * Code: @aurelienLRY
 */
'use server';
/* Models */
import Spots from "@/lib/dataBase/models/spots";
/* TypesScript types*/
import { ISpots } from "@/lib/dataBase/models/types";

export default async function getSpots() {
  try {
    const spots = await Spots.find() as ISpots[];
    return JSON.parse(JSON.stringify(spots));
  } catch (error) {   
    throw error;
  }
  
}