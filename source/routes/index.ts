import express from "express";
import interactions from "../controllers/interactions";
import eventSubscriptions from "../controllers/eventSubscriptions";
import slashCommands from "../controllers/slashCommands";

const router = express.Router();

router.all("/", (req, res) => {
  res.json({
    name: "Ezeani Ikenna",
  });
});

router.post("/event-subscriptions", eventSubscriptions);
router.post("/interactions", interactions);
router.post("/slash-commands", slashCommands);

export default router;
