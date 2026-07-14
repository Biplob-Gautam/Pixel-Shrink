import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); //help to serve images saved in public folder if not used cloudinary type service
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//importing routes
import authRouter from "./routes/auth.routes.js";
import jobRouter from "./routes/job.routes.js";

//Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.get("/test", (req, res) => {
  console.log("TEST HIT");
  res.json({ success: true });
});

export default app;
