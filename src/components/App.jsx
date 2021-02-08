import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/notes").then(foundNotes => {
      if(foundNotes.ok){
        return foundNotes.json();
      }
    }).then(foundNotes => setNotes(foundNotes));
  }, [notes]);

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((item) => {
        return (
          <Note
            key={item._id}
            id={item._id}
            title={item.title}
            content={item.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
