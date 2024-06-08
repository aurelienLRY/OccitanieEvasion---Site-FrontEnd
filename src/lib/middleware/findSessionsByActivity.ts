"use server"; 
import  Activity  from "@/lib/models/activity";
import session from "@/lib/models/session";
import spot from "@/lib/models/spots";

export default async function findSessionsByActivity(activity: string) {
const activities : Array<object> = await Activity.find().lean();

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