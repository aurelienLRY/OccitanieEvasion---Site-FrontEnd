"use server";

import Activity from "@/lib/models/activity";
import spots from "@/lib/models/spots";

import { IActivity, IActivities, ISpot, ISpots } from "@/lib/models/types";

export default async function findSpotsByActivity(activity: string) {
  const activities: IActivities = await Activity.find().lean();
  const thisActivity: IActivity | undefined = activities.find(
    (act: { name: string }) => act.name === activity
  );
  if (!thisActivity) {
    return null;
  }

  const spot: ISpots = await spots.find({ activity: thisActivity._id });
  return spot;
}