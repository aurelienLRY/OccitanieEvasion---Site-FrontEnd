"use server"; 
import connectDB from "../config/database";
import { disconnectDB } from "../config/database";
import  Activity  from "../models/activity";
import session from "../models/session";
import spot from "../models/spots";

export default async function findSessionsByActivity(activity: string) {
  await connectDB();
const activities : Array<object> = await Activity.find();
  const thisActivity :{ name : string } = activities.find(
    (act: { name: string }) => act.name === activity
  );
  if (!thisActivity) {
    return null;
  }
const sessions = await session.find({ activity: thisActivity._id });
  sessions.sort((a: { date: string }, b: { date: string }) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const spots : Array<object> = await spot.find();

  // Add spot name to each session
  sessions.forEach((session: { spot: string , activity : string }) => {
    const spotName : { name : string} = spots.find((spot: { _id: string }) => spot._id.toString() === session.spot);
    session.spot = spotName.name;
    session.activity = thisActivity.name.toLocaleLowerCase();
});

const newSessions : Array<object> = [];
// retirer les session qui sont passées
  const now = new Date();
  sessions.forEach((session : Session) => {
    if (new Date(session.date) > now && session.status === "active" &&  session.placesMax > session.placesReserved) {
       newSessions.push(session); 
    }
  });

await disconnectDB();
  return newSessions;
}


type Session = {
  _id: string;
  status: string;
  date: string;
  startTime: string;
  endTime: string;
  activity: string;
  spot: string;
  placesMax: number;
  placesReserved: number;
};