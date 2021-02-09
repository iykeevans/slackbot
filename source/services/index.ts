import axios from "axios";
import env from "dotenv";

env.config();

const baseURL = "https://slack.com/api";
const Authorization = `Bearer ${process.env.SLACK_OAUTH_TOKEN}`;

export const sendMessage = (payload: any) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization,
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
    Authorization,
  };

  return axios.post(responseUrl, payload, { headers });
};

export const triggerModal = (payload: any) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization,
  };

  return axios.post(`${baseURL}/views.open`, payload, { headers });
};
