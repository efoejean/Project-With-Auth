// Uses the db client from loader.js
import client from "./client.js";
import config from "./config.js";


const collection = client.db(config.db.name).collection(config.db.collection);

export default{
    index(queryParams){
       
      return collection.find({}).limit(Number(queryParams.limit) || 50).toArray();
    },
};

