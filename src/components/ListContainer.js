import React, { useState } from "react";
import Header from "./Header";
import TodoApp from "./TodoList/TodoApp";
import Shopping from "./ShoppingList/Shopping";
import { ListsContainer } from "./styles/Containers.styled";
import { PrimaryButton } from "./styles/Buttons.styled";

export default function ListContainer({initialName, isTodo, isShopping}) {
  const [listName, setListName] = useState(initialName);
  function handleListNameChange(e) {
    setListName(e.target.value);
  }
  function displayList() {
    if(isTodo) {
      return <TodoApp />
    }
    if(isShopping) {
      return <Shopping />
    }
  }
  return (
    <ListsContainer>
      <Header 
        listName={listName} 
        onChange={handleListNameChange}
      />
      {displayList()}
      <PrimaryButton style={{marginRight: '15px'}}>Save as template</PrimaryButton>
      <PrimaryButton>Delete list</PrimaryButton>
    </ListsContainer>
  );
}
