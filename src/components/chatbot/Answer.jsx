import React from "react";
import "./chatbotStyle.css";
import { borderColor } from "@mui/system";

const Answer = (props) => {
  return (
    <>
      <button
        onClick={() => props.select(props.content, props.nextId)}
        className="btn bgleft"
      >
        <span>{props.content}</span>
      </button>
    </>
  );
};

export default Answer;
