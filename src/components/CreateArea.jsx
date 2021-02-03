import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    props.setNotes((prevValue) => {
      return [...prevValue, note];
    });
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function handleClick(){
    setExpanded(true);
  }

  function closeInput(){
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
        {isExpanded && <h1 onClick={closeInput} className="close-btn">Close</h1>}
      </form>
    </div>
  );
}

export default CreateArea;
