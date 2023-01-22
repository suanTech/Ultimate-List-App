import React, { useState, useContext } from "react";
import { AddButton } from "../styles/Buttons.styled";
import { AddItemForm, AddItemInput } from "../styles/Inputs.styled";
import { TasksDispatchContext } from "../Context";

let nextId = 0;
export default function AddTodo() {
  const [task, setTask] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  function handleSubmit(e) {
    e.preventDefault();
    if (task === "") {
      alert("Please enter task");
    } else {
      dispatch({
        type: "added",
        id: nextId++,
        text: task,
      });
      setTask("");
    }
  };
  return (
    <AddItemForm>
      <AddItemInput
        placeholder="add task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <AddButton type="submit" onClick={handleSubmit}>
        +{" "}
      </AddButton>
    </AddItemForm>
  );
}
