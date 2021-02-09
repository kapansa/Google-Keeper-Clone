import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";


function Note(props) {

  const [notes, setNotes] = useState([]);

  function deleteNote(id) {
    axios.post(`/remove/${id}`);
  }

  useEffect(() => {
    fetch("/notes").then(foundNotes => {
      if(foundNotes.ok){
        return foundNotes.json();
      }
    }).then(foundNotes => setNotes(foundNotes));
  }, [notes]);

  return (
    <div>
      {notes.map((item) => {
        return (
          <div key={item._id} className="note">
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <button
              onClick={() => {
                deleteNote(item._id);
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        );
      })}

    </div>
  );
}

export default Note;
