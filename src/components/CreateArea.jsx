import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);
  const [isEmpty, setEmpty] = useState("none");

  function handleChange(event) {
    const { value, name } = event.target;

    setEmpty("none");

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    const {title, content} = note;
    if(title === "" || content === ""){
      setEmpty("block");
    }else{
      props.setNotes((prevValue) => {
        return [...prevValue, note];
      });
      setNote({ title: "", content: "" });
    }
    event.preventDefault();
  }

  function handleClick(){
    setExpanded(true);
  }

  function closeInput(){
    setExpanded(false);
    setEmpty("none");
    setNote({ title: "", content: "" });
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
        <p style={{display: isEmpty, color: "red"}}>Please fill in both fields!</p>
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
