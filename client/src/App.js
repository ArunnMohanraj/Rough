import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  useEffect(()=>{
  fetch('https://morning-gorge-54382.herokuapp.com/notes')
.then(response => response.json())
.then(data => setNotes(data));
});

  const [notes, setNotes] = useState([]);

  function addNote(data) {}

  function deleteNote(title) {
     const remNote ={
       title
     }
   Axios.post('https://morning-gorge-54382.herokuapp.com/delete',remNote);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
