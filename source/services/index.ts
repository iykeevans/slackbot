import axios from "axios";

import { SLACK_OAUTH_TOKEN } from "../constants";

const baseURL = "https://slack.com/api";

// axios.create({
//   baseURL,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${SLACK_OAUTH_TOKEN}`,
//   },
// });

export const sendMessage = (payload: any) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer xoxb-1718634257717-1721753170850-KHVngcCCOMdSVkmF10VNxoLY`,
  };
  return axios.post(`${baseURL}/chat.postMessage`, payload, { headers });
};

interface IPayload {
  text?: string;
  blocks?: any;
}

export const sendInteractiveMessage = (
  responseUrl: string,
  payload: IPayload
) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer xoxb-1718634257717-1721753170850-KHVngcCCOMdSVkmF10VNxoLY`,
  };
  return axios.post(responseUrl, payload, { headers });
};

export const triggerModal = (payload: any) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer xoxb-1718634257717-1721753170850-KHVngcCCOMdSVkmF10VNxoLY`,
  };
  return axios.post(`${baseURL}/views.open`, payload, { headers });
};
