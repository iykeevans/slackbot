import { Request, Response } from "express";

import { sendMessage } from "../services";
import message from "../utils/messages";

export default async (request: Request, response: Response) => {
  try {
    console.log(request.body);

    const { command, channel_id } = request.body;

    if (command === "/hello") {
      response.json();

      await sendMessage({
        channel: channel_id,
        text: "Welcome. How are you doing?",
        blocks: message().moodMessage,
      });
    }
  } catch (err) {
    throw err;
  }
};
