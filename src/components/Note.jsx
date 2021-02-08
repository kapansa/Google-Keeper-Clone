import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

function Note(props) {

  function deleteNote(id) {

    axios.post(`http://localhost:4000/remove/${id}`);

  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          deleteNote(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
