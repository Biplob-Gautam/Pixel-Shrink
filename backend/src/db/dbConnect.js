const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed", error);

    process.exit(1);
  }
};
