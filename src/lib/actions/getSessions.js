"use server";
import session from "../models/session";

export default async function getSessions() {
  const sessions = await session.find().lean();
  return sessions;
}


export async function getSessionsByActivity(activityId) {
  const sessions = await session.find({ activity: activityId });
  return sessions;
}