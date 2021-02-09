import express from "express";

import interactions from "../controllers/interactions";
import eventSubscriptions from "../controllers/eventSubscriptions";
import slashCommands from "../controllers/slashCommands";
import { getAllResponses } from "../controllers/responses";

const router = express.Router();

router.post("/event-subscriptions", eventSubscriptions);
router.post("/interactions", interactions);
router.post("/slash-commands", slashCommands);
router.get("/responses", getAllResponses);

export default router;
