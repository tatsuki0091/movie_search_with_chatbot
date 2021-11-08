import React, { useState } from "react";
import defaultDataset from "./dataset";
import { AnswersList } from "./index";

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
  return (
    <>
      {popUpButton && (
        <section className="container">
          <div className="row">
            <AnswersList />
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
