import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOTS}/${config.MONGO_DATABASE}`,
      options
    );
    console.log("Database conected to : ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
