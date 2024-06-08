"use server";

import Activity from "@/lib/models/activity";
import spots from "@/lib/models/spots";

export default async function findSpotsByActivity(activity: string) {
  const activities: Array<object> = await Activity.find().lean();
  const thisActivity: { name: string } = activities.find(
    (act: { name: string }) => act.name === activity
  );
  if (!thisActivity) {
    return null;
  }

  const spot: Array<object> = await spots.find({ activity: thisActivity._id });
  return spot;
}