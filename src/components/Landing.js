import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SelectList, SelectInput } from "./styles/Landing.styled";
import { MainTitle, Label, ErrorMessage } from "./styles/Text.styled";
import { GoButton } from "./styles/Buttons.styled";

export default function Landing() {
  const [link, setLink] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = () => {
    if (link) {
      localStorage.clear();
      setErrorMessage("");
    } else {
      setErrorMessage("Please choose a list and click the button");
    }
    return errorMessage;
  };

  return (
    <>
      <MainTitle>Ultimate list</MainTitle>
      <Label htmlFor="lists">Choose your list to start</Label>
      <SelectList>
        <SelectInput
          name="lists"
          id="lists"
          defaultValue="select"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        >
          <option value="select" disabled>
            Choose List
          </option>
          <option value="todo">Todo List</option>
          <option value="shopping">Shopping List</option>
        </SelectInput>
        <GoButton>
          <NavLink to={link} onClick={handleClick}>
            Go
          </NavLink>
        </GoButton>
        {/* <h3>Or continue with previous list</h3> */}
      </SelectList>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
}
