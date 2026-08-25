import app from "./app.js";
import dbConnection from "./db/dbConnect.js";

const port = process.env.PORT || 3000;

dbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
