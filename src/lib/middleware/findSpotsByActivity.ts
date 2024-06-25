// @/lib/middleware/findSpotsByActivity.ts
"use server";

/* Models */
import Activity from "@/lib/dataBase/models/activity";
import Spot from "@/lib/dataBase/models/spots";
/* TypeScript types */
import { IActivity, ISpots } from "@/lib/dataBase/models/types";

/**
 * Finds spots by activity.
 * @param {string} activity - The activity to search for. (e.g. "escalade")
 * @returns {Promise<ISpots[] | null>} - The spots found for the given activity, or null if the activity is not found.
 */
export default async function findSpotsByActivity(activity: string): Promise<ISpots | null> {
  try {
    const foundActivity: IActivity | null = await Activity.findOne({ name: activity });
    if (!foundActivity) {
      console.error(`Activity ${activity} not found`);
      return null;
    }
    const result: ISpots = JSON.parse(JSON.stringify( await Spot.find({
      practicedActivities: {
        $elemMatch: {
          activityId: foundActivity._id.toString()
        }
      }
    })));
    if (!result) {
      console.error(`No spots found for activity ${activity}`);
      return null;
    }

    console.log(`Spots found for activity ${activity}: ${result}`);


    return JSON.parse(JSON.stringify(result)) as ISpots;
  } catch (error: unknown) {
    console.error(`Error finding spots by activity: ${(error as Error).message}`);
    return null;
  }
}
