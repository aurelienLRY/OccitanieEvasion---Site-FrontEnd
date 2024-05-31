"use server";
import connectDB from "../config/database";
import activity from "../models/activity";
import { disconnectDB } from "../config/database";


export default async function getActivities() {
  await connectDB();
  const activities = await activity.find();
  disconnectDB();
  return activities
}

export async function getActivityById(id) {
  await connectDB();
  const activity = await activity.findById(id);
  disconnectDB();
  return activity;
}