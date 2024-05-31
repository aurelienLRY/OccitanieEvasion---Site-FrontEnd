"use server";
import connectDB from "../config/database";
import { disconnectDB } from "../config/database";
import spot from "../models/spots";

export default async function getSpots() {
  await connectDB();
  try {
    const spots = await spot.find().lean();
    console.log(spots);
    return spots;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  disconnectDB();
}