import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`The server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection failed", err);
  });
