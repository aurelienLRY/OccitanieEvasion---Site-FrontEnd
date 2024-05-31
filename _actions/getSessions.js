"use server";
import connectDB from "../config/database";
import { disconnectDB } from "../config/database";
import session from "../models/session";

export default async function getSessions() {
  await connectDB();
  const sessions = await session.find();
  return sessions;
}


export async function getSessionsByActivity(activityId) {
  await connectDB();
  const sessions = await session.find({ activity: activityId });
  disconnectDB();
  return sessions;
}