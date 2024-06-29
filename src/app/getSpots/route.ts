import getSpots from "@/lib/actions/getSpots";
import { connectDB, disconnectDB } from "@/lib/dataBase/connectMongo";

export async function GET() {
    await connectDB();
  const spots = await getSpots();
  await disconnectDB();
  return Response.json(spots);
}