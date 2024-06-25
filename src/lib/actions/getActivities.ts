/*
* @/lib/actions/getActivities.ts
* This function is used to get all activities from the database
* Code: @aurelienLRY
*/
"use server";

/* Models */
import activity from "@/lib/dataBase/models/activity";
/* TypesScript types*/
import { IActivity } from "@/lib/dataBase/models/types";


/*
* Get all activities from the database
* @returns {Promise<IActivity[]>} - The activities found in the database
*/
export default async function getActivities() {
  try {
    const activities = await activity.find() as IActivity[];
    return JSON.parse(JSON.stringify(activities));
  }
  catch (error) {
    throw error;
  }
}

export async function getActivityById(id : string) {
  try {
    const result = await activity.findById(id) as IActivity;
    return JSON.parse(JSON.stringify(result));
  }
  catch (error) {
    throw error;
  }
}