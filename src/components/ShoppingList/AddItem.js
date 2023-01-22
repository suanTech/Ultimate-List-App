import { useState, useContext } from "react";
import { AddButton } from "../styles/Buttons.styled";
import { AddItemForm, AddItemInput } from "../styles/Inputs.styled";
import { TasksDispatchContext } from "../Context";

let nextId = 0;
export default function AddItem() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useContext(TasksDispatchContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue === "") {
      alert("Please enter item");
    } else {
      setInputValue("");
      dispatch({
        type: "added",
        name: inputValue,
        id: nextId++,
      });
    }
  }

  return (
    <AddItemForm>
      <AddItemInput
        placeholder="add item"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <AddButton
        type='submit'
        onClick={handleSubmit}
      >
        +{" "}
      </AddButton>
    </AddItemForm>
  );
}
