// @/lib/middleware/findSessionsByActivity.ts
"use server"; 
/* Models */
import  Activity  from "@/lib/dataBase/models/activity";
import session from "@/lib/dataBase/models/session";
import spot from "@/lib/dataBase/models/spots";
/* TypesScript types*/
import { IActivity , IActivities , ISession , ISessions , ISpot , ISpots} from "@/lib/dataBase/models/types";


/**
 * Finds sessions by activity.
 * @param {string} activity - The activity to search for. (e.g. "escalade")
 * @returns {Promise<ISessions | null>} - The sessions found for the given activity, or null if the activity is not found.
 */
export default async function findSessionsByActivity(activity: string) {
const activities: IActivities = JSON.parse(JSON.stringify(await Activity.find()));


const thisActivity: IActivity  = activities.find(
  (act: { name: string }) => act.name === activity
)!;

if (!thisActivity) {
  return null;
}

const sessions : ISessions = JSON.parse(JSON.stringify(await session.find({ activity: thisActivity?._id }))) ;
sessions.sort((a: { date: string }, b: { date: string }) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
});

  const spots : Array<ISpot> = JSON.parse(JSON.stringify(await spot.find()));

  // Add spot name to each session
  sessions.forEach((session: ISession) => {
    const spotName = spots.find((spot: ISpot) => spot._id.toString() === session.spot) as ISpot;
    session.spot = spotName.name;
    session.activity = thisActivity.name.toLocaleLowerCase();
});

const newSessions : Array<ISession> = [];
// retirer les session qui sont passées
  const now = new Date();
  sessions.forEach((session : ISession) => {
    if (new Date(session.date) > now && session.status === "active" &&  session.placesMax > session.placesReserved) {
       newSessions.push(session); 
    }
  });

  return newSessions;
}





