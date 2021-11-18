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

router.post("/reviews/:id", async (req, res) => {
    const newReview = controller.createReview(req.params.id, req.body); 
    res.json(newReview);
  });

export default router;
