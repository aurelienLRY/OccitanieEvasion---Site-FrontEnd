/*
 * @/lib/actions/getSpots.ts
 * Get all spots from the database
 * Code: @aurelienLRY
 */
'use server';
/* MOngoDB */
import { connectDB, disconnectDB } from "@/lib/dataBase/connectMongo";
/* Models */
import Spots from "@/lib/dataBase/models/spots";
/* TypesScript types*/
import { ISpots } from "@/lib/dataBase/models/types";

export default async function getSpots() : Promise<ISpots> {
  try {
    await connectDB();
    const spots = await Spots.find() as ISpots;
    return JSON.parse(JSON.stringify(spots));
  } catch (error) {   
    throw error;
  }
  finally {
    await disconnectDB();
  }
}

// /pages/api/spots.ts

import { NextApiRequest, NextApiResponse } from 'next';

export async function apiGetSpots(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
    const spots = await Spots.find() as ISpots;
    await disconnectDB();
    res.status(200).json(spots);
  } catch (error) {
    console.error(error);
    await disconnectDB();
    res.status(500).json({ error: 'Failed to fetch spots' });
  }
}
