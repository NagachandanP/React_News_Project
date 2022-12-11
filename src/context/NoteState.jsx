import React, { useState } from "react";
import noteContext from "./noteContext";
const NoteState = (props) => {
  const [nation, setNation] = useState("in");
  const [category, setCategory] = useState("general");
  const [test, setTest] = useState("hhh");
  const [darkMode, setDarkMode] = useState(false);

  const update = (prop) => {
    setNation(prop);
  };
  const updateCategory = (prop) => {
    setCategory(prop);
  }
  return (
    <noteContext.Provider value={{ nation, update, category, test, setTest, updateCategory, darkMode, setDarkMode }}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
