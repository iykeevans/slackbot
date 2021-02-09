import express from "express";
import Response from "../models/response";

export const getAllResponses = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const data = await Response.find();

    return response.json({
      status: "success",
      message: "Successfully fetched all user responses",
      data,
    });
  } catch (err) {
    throw err;
  }
};
