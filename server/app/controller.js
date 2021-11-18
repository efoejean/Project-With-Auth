// Uses the db client from loader.js
import client from "./client.js";
import config from "./config.js";
import { v4 as uuidv4 } from "uuid";


const collection = client.db(config.db.name).collection(config.db.collection);

export default{
    index(queryParams){
       
      return collection.find({}).limit(Number(queryParams.limit) || 50).toArray();
    },

    createReview(listingId, newReview) { 
        newReview._id = uuidv4(); // Generate a unique id for the review
        return collection.updateOne(
          { _id: listingId },
          { $push: { reviews: newReview } } // Add the review to the reviews array
        );
      },
};

