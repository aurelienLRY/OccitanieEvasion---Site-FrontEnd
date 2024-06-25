/*
* @/lib/actions/getSessions.ts
* This function is used to get all sessions from the database
* Code: @aurelienLRY
*/
"use server";
/* Models */
import session from "../dataBase/models/session";

/* TypesScript types*/
import { ISession } from "../dataBase/models/types";

/*
* Get all sessions from the database
* @returns {Promise<ISession[]>} - The sessions found in the database
*/
export default async function getSessions() {
  try {
    const sessions = await session.find() as ISession[];
    return JSON.parse(JSON.stringify(sessions));
  } catch (error) {
    throw error;
  }
}

/*
* Get all sessions from the database by activity
* @param {string} activityId - The activity id to search for
* @returns {Promise<ISession[]>} - The sessions found in the database
*/
export async function getSessionsByActivity(activityId : string) {
  try {
    const sessions = await session.find({ activity: activityId }) as ISession[];
    return JSON.parse(JSON.stringify(sessions));
  } catch (error) {
    throw error;
  }
}