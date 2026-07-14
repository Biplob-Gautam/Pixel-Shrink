import app from "./app.js";
import dbConnection from "./db/dbConnect.js";

dbConnection();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The app is listening on http://localhost:${port}`);
});
