import React, { useState, useEffect } from "react";
import defaultDataset from "./dataset";
import { AnswersList, Chats } from "./index";

const Chatbot = () => {
  const [popUpButton, setPopUpButton] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);
  const handleChatoBox = (button) => {
    setPopUpButton(!button);
  };
  const initAnswer = () => {
    const initDataSet = dataset[currentId];
    const initAnswerList = initDataSet.answers;
    setAnswers(initAnswerList);
  };

  const initChats = () => {
    const initDataSet = dataset[currentId];
    const chat = {
      text: initDataSet.question,
      type: "question",
    };

    const array = new Array(chat);

    setChats(array);
  };
  useEffect(() => {
    initAnswer();
    initChats();
  }, []);
  return (
    <>
      {popUpButton && (
        <section className="container">
          <div className="row">
            <Chats chats={chats} />
            <AnswersList answers={answers} />
            {/* <textarea placeholder="Send a message..." />
              <button>Send</button> */}
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => {
          handleChatoBox(popUpButton);
        }}
        className="popup-button"
      >
        Chat
      </button>
    </>
  );
};

export default Chatbot;
