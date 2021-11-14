import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <>
      <TextField
        fullWidth={true}
        id="standard-basic"
        label={props.label}
        margin={"dense"}
        multiline={props.multiline}
        row={props.row}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    </>
  );
};

export default TextInput;
