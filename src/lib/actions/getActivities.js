"use server";
import activity from "@/lib/models/activity";

export default async function getActivities() {
  const activities = await activity.find();
  return activities
}

export async function getActivityById(id) {
  const activity = await activity.findById(id);
  return activity;
}