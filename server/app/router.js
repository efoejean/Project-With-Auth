import Router from "express";
import controller from "./controller.js";

const router = new Router();

router.get("/", (_, res) => {
    res.send("Hello Api");
})

router.get("/current-listings", async(req, res) => {
    const listings = await controller.index(req.query);
    res.send(listings);
});
// TODO: Add routes here (maybe 🤔 start with a GET test route)

export default router;
