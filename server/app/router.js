import Router from "express";
import client from "./client.js";
import config from "./config.js";

const router = new Router();

router.get("/", (_, res) => {
    res.send("Hello Api");
})

router.get("/current-listings", async(_, res) => {
    const listings = await client.db(config.db.name).collection(config.db.collection).find({}).limit(5).toArray();
    res.send(listings);
});
// TODO: Add routes here (maybe 🤔 start with a GET test route)

export default router;
