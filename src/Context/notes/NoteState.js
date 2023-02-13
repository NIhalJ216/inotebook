import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initNotes = [];
  const [notes, setNotes] = useState(initNotes);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDRmZWM4NGI0ZjhhNTNiNzVhMGZlIn0sImlhdCI6MTY2NjM0NzExNH0.9ZsMvmNI0FWRFBEGbG3cH49CTsjHu3bjFayRR9Tvn-8",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDRmZWM4NGI0ZjhhNTNiNzVhMGZlIn0sImlhdCI6MTY2NjM0NzExNH0.9ZsMvmNI0FWRFBEGbG3cH49CTsjHu3bjFayRR9Tvn-8",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    let note = {
      _id: "6352d90936263e8a28b1d4ef8",
      user: "63444fec84b4f8a53b75a0fe4",
      title: title,
      description: description,
      tag: tag,
      date: "2022-10-21T17:38:17.419Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDRmZWM4NGI0ZjhhNTNiNzVhMGZlIn0sImlhdCI6MTY2NjM0NzExNH0.9ZsMvmNI0FWRFBEGbG3cH49CTsjHu3bjFayRR9Tvn-8",
      },
    });

    const json = response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NDRmZWM4NGI0ZjhhNTNiNzVhMGZlIn0sImlhdCI6MTY2NjM0NzExNH0.9ZsMvmNI0FWRFBEGbG3cH49CTsjHu3bjFayRR9Tvn-8",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
