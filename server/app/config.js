// Provides config for the app in conjunction with dotenv
// Config is the only place accesses 'dotenv'
import dotenv from "dotenv";

dotenv.config();

export default {
  db:{
    clientConnections : process.env.DB_CLIENT_URL,
    name: "sample_airbnb",
    collection: "listingsAndReviews",
  },
  port: process.env.PORT || 3000,
// 127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000",
};
