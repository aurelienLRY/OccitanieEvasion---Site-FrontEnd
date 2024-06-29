import getSpots from "@/lib/actions/getSpots";
import { connectDB, disconnectDB } from "@/lib/dataBase/connectMongo";

export async function GET() {
  try {
    await connectDB();
    const spots = await getSpots();
    return Response.json(spots);
  } catch (error) {
    console.log(error);
  } finally {
    await disconnectDB();
  }
}
