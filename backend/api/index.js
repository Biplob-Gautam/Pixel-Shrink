import app from "../src/app.js";
import dbConnection from "../src/db/dbConnect.js";

let isConnected = false;

async function connectDB() {
  if (!isConnected) {
    await dbConnection();
    isConnected = true;
  }
}

export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
