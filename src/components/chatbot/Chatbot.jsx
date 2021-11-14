import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import defaultDataset from "./dataset";
import { AnswersList, Chats } from "./index";
import Form from "../forms/Form";
import ChatImg from "../../assets/chat.png";

const Chatbot = () => {
  const scrollBottomRef = useRef(null);
  const [popUpButton, setPopUpButton] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);
  const handleChatoBox = (button) => {
    setPopUpButton(!button);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayNextQuestion = (nextQuestionId) => {
    const chat = {
      text: dataset[nextQuestionId].question,
      type: "question",
    };

    const array = chats;
    array.push(chat);
    setAnswers(dataset[nextQuestionId].answers);
    setChats(array);
    setCurrentId(nextQuestionId);
  };

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        setTimeout(() => displayNextQuestion(nextQuestionId));
        break;
      case /^https:*/.test(nextQuestionId):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;
      case nextQuestionId === "contact":
        handleClickOpen();
        break;
      default:
        const chat = {
          text: selectedAnswer,
          type: "answer",
        };

        const array = chats;

        array.push(chat);
        setChats({ array });
        displayNextQuestion(nextQuestionId);
        break;
    }
  };

  useEffect(() => {
    const initAnswer = "";
    selectAnswer(initAnswer, currentId);
  }, []);

  useLayoutEffect(() => {
    // 以下はtypescriptの書き方。jsの場合は
    if (scrollBottomRef && scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView();
    }
  });
  return (
    <>
      {popUpButton && (
        <section className="container">
          <div className="row">
            <Chats chats={chats} />
            <div ref={scrollBottomRef} />
          </div>
          <div className="answer-row">
            <AnswersList answers={answers} select={selectAnswer} />
          </div>
          <Form open={open} handleClose={handleClose} />
        </section>
      )}

      <button
        type="button"
        onClick={() => {
          handleChatoBox(popUpButton);
        }}
        className="popup-button"
      />
    </>
  );
};

export default Chatbot;
