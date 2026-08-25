import mongoose from "mongoose";

let isConnected = false;

const dbConnection = async () => {
  if (isConnected) {
    return;
  }

  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    isConnected = true;

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed", error);
    throw error;
  }
};

export default dbConnection;
