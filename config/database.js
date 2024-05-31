import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected...");
    return true;
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;

export const disconnectDB = async () => {
  if (mongoose.connection.readyState) {
    await mongoose.disconnect();
    console.log("MongoDB Disconnected...");
  }
};
