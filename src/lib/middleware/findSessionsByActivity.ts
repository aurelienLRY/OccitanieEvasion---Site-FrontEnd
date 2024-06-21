"use server"; 
import  Activity  from "@/lib/models/activity";
import session from "@/lib/models/session";
import spot from "@/lib/models/spots";
import { IActivity , IActivities , ISession , ISessions , ISpot , ISpots} from "@/lib/models/types";

export default async function findSessionsByActivity(activity: string) {
const activities: IActivities = await Activity.find().lean();

const thisActivity: IActivity  = activities.find(
  (act: { name: string }) => act.name === activity
)!;

if (!thisActivity) {
  return null;
}

const sessions : ISessions = await session.find({ activity: thisActivity?._id });
sessions.sort((a: { date: string }, b: { date: string }) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
});

  const spots : Array<ISpot> = await spot.find();

  // Add spot name to each session
  sessions.forEach((session: ISession) => {
    const spotName = spots.find((spot: ISpot) => spot._id.toString() === session.spot) as ISpot;
    session.spot = spotName.name;
    session.activity = thisActivity.name.toLocaleLowerCase();
});

const newSessions : ISessions | undefined = [];
// retirer les session qui sont passées
  const now = new Date();
  sessions.forEach((session : ISession) => {
    if (new Date(session.date) > now && session.status === "active" &&  session.placesMax > session.placesReserved) {
       newSessions.push(session); 
    }
  });

  return newSessions;
}





