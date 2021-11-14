import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./chatbotStyle.css";
import NoImage from "../../assets/no_image.jpg";
import Takutou from "../../assets/takutou.jpeg";

const Chat = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse ";
  return (
    <>
      <ListItem className={classes}>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="Icon" src={Takutou} sx={{ width: 24, height: 24 }} />
          ) : (
            <Avatar alt="Icon" src={NoImage} sx={{ width: 24, height: 24 }} />
          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
      </ListItem>
    </>
  );
};

export default Chat;
