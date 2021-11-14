import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { postSlack } from "../../api/form";
import TextInput from "./TextInput";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const inputName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const inputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const inputMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const submitForm = (e, close) => {
    e.preventDefault();
    const textMessage = {
      text:
        "There is a contact	\n" +
        "name " +
        name +
        "\n" +
        "email " +
        email +
        "\n" +
        "message " +
        message,
    };

    postSlack(textMessage);
    close();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Contact Form</DialogTitle>
        <DialogContent>
          <TextInput
            label={"Name"}
            multiline={false}
            row={1}
            value={name}
            type={"text"}
            onChange={(event) => inputName(event)}
          />
          <TextInput
            label={"Email"}
            multiline={false}
            row={1}
            value={email}
            type={"email"}
            onChange={(event) => inputEmail(event)}
          />
          <TextInput
            label={"Message"}
            multiline={true}
            row={5}
            value={message}
            type={"text"}
            onChange={(event) => inputMessage(event)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
          <Button
            onClick={(event) => {
              submitForm(event, props.handleClose);
            }}
            autoFocus
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Form;
