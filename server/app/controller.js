// Uses the db client from loader.js
import client from "./client.js";
import config from "./config.js";


const collection = client.db(config.db.name).collection(config.db.collection);

export default{
    index(){
       
      return collection.find({})
      .limit(5).toArray();
    },
};

