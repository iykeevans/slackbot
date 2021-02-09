import express from "express";

import Response from "../models/response";
import { sendInteractiveMessage, triggerModal } from "../services";
import messages from "../utils/messages";

interface IUserResponse {
  mood: string;
  startWalkTime: string;
  endWalkTime: string;
  day: string;
  hobbies: any[];
  numberScale: string;
}

const userResponse: IUserResponse = {
  mood: "",
  startWalkTime: "",
  endWalkTime: "",
  day: "",
  hobbies: [],
  numberScale: "",
};

let lastBlockActionResponseUrl = "";

export default async (request: express.Request, response: express.Response) => {
  try {
    response.json();

    const payload = JSON.parse(request.body.payload);

    if (payload.type === "block_actions") {
      switch (payload.actions[0].action_id) {
        case "mood":
          userResponse.mood = payload.actions[0].selected_option.value;

          await sendInteractiveMessage(payload.response_url, {
            text: "When are you free this week for a walk?",
            blocks: messages().timeSlotsMessage,
          });

          break;

        case "startWalkTime":
          // first set start walk time
          userResponse.startWalkTime = payload.actions[0].selected_option.value;

          // if userResponse has start walk time, endwalk time and day proceed to next screen
          if (
            userResponse.startWalkTime &&
            userResponse.endWalkTime &&
            userResponse.day
          ) {
            await sendInteractiveMessage(payload.response_url, {
              text: "What are your favorite hobbies",
              blocks: messages().hobbiesMessage,
            });
          }

          break;

        case "endWalkTime":
          // first set end walk time
          userResponse.endWalkTime = payload.actions[0].selected_option.value;

          // if userResponse has start walk time, endwalk time and day proceed to next screen
          if (
            userResponse.startWalkTime &&
            userResponse.endWalkTime &&
            userResponse.day
          ) {
            await sendInteractiveMessage(payload.response_url, {
              text: "What are your favorite hobbies",
              blocks: messages().hobbiesMessage,
            });
          }

          break;

        case "day":
          // first set day
          userResponse.day = payload.actions[0].selected_option.value;

          // if userResponse has start walk time, endwalk time and day proceed to next screen
          if (
            userResponse.startWalkTime &&
            userResponse.endWalkTime &&
            userResponse.day
          ) {
            await sendInteractiveMessage(payload.response_url, {
              text: "What are your favorite hobbies",
              blocks: messages().hobbiesMessage,
            });
          }

          break;

        case "hobbies":
          userResponse.hobbies = payload.actions[0].selected_options;

          break;

        case "handleHobbies":
          await triggerModal(messages(payload.trigger_id).numberScaleMessage);
          lastBlockActionResponseUrl = payload.response_url;

          break;

        default:
          await sendInteractiveMessage(payload.response_url, {
            text: "thank you",
          });

          break;
      }
    } else if (payload.type === "view_submission") {
      userResponse.numberScale =
        payload.view.state.values.answerInput.answer.value;

      await sendInteractiveMessage(lastBlockActionResponseUrl, {
        text: "thank you",
      });

      userResponse.hobbies = userResponse.hobbies.map((item) => item.value);

      await new Response(userResponse).save();
    }
  } catch (err) {
    throw err;
  }
};
