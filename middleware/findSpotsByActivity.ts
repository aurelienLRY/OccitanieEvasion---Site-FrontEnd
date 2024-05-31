"use server";
import connectDB from "../config/database";
import { disconnectDB } from "../config/database";
import Activity from "../models/activity";
import spot from "../models/spots";

export default async function findSpotsByActivity(activity: string) {
  await connectDB();
  const activities: Array<object> = await Activity.find();
  const thisActivity: { name: string } = activities.find(
    (act: { name: string }) => act.name === activity
  );
  if (!thisActivity) {
    return null;
  }

  const spots: Array<object> = await spot.find({ activity: thisActivity._id }).lean();
console .log("spots",spots);
  await disconnectDB();
  return spots;
}