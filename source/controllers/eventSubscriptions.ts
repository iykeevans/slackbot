import { Request, Response } from "express";

import { sendMessage } from "../services";
import message from "../utils/messages";

export default async (request: Request, response: Response) => {
  try {
    const { challenge, event } = request.body;

    console.log(event);

    if (challenge) {
      return response.json({ challenge });
    }

    if (event && event.type === "app_mention") {
      // acknowledge response
      response.json();

      await sendMessage({
        channel: event.channel,
        text: "Welcome. How are you doing?",
        blocks: message().moodMessage,
      });

      return;
    }
  } catch (err) {
    throw err;
  }
};
