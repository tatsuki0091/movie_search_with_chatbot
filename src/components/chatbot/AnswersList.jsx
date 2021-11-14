import React from "react";
import { Answer } from "./index";

const AnswersList = (props) => {
  return (
    <>
      {props.answers.map((answer, index) => (
        <Answer
          content={answer.content}
          key={`answers-${index}`}
          nextId={answer.nextId}
          select={props.select}
        />
      ))}
    </>
  );
};

export default AnswersList;
