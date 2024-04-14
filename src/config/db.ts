import mongoose from "mongoose";
import {DB_URI} from "./env.ts";

const connectDatabaseCore = async () => {
  return await mongoose.connect(DB_URI);
};

const connectDatabase = () => {
  connectDatabaseCore()
    .then((router) => {
      console.log(`MongoDB : success : ${router.connection.host}`);
    })
    .catch((error) => {
      console.log(`MongoDB : error : ${error.message}`);
    })
};

export default connectDatabase;
