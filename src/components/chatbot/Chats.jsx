import React from "react";
import List from "@mui/material/List";
import { Chat } from "./index";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chatList: {
    height: 400,
    padding: 0,
    overflow: "auto",
  },
}));

const Chats = (props) => {
  const classes = useStyles;
  return (
    <>
      <List className={classes.chatList}>
        {props.chats.map((chat, index) => (
          <Chat text={chat.text} type={chat.type} key={index.toString} />
        ))}
      </List>
    </>
  );
};

export default Chats;
