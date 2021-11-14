import axios from "axios";

const SLACK_API_KEY = process.env.REACT_APP_SLACK_API;

export const postSlack = async (textMessage) => {
  fetch(SLACK_API_KEY, {
    method: "POST",
    body: JSON.stringify(textMessage),
  }).then(() => {
    return alert("We sent your message");
  });
};
