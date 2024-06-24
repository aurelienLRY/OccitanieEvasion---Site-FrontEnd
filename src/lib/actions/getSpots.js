'use server';
import { disconnectDB } from "@/lib/config/database";
import Spots from "@/lib/models/spots";

export default async function getSpots() {
  try {
    const spots = await Spots.find().lean();
    return spots;
  } catch (error) {   
    disconnectDB();
    throw error;
  }
  
}