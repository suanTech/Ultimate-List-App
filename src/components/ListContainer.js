import React, { useState, useEffect } from "react";
import Header from "./Header";
import TodoApp from "./TodoList/TodoApp";
import Shopping from "./ShoppingList/Shopping";
import { ListsContainer } from "./styles/Containers.styled";
import { PrimaryButton } from "./styles/Buttons.styled";

export default function ListContainer({initialName, isTodo, isShopping}) {
  const [listName, setListName] = useState((initialName) => {
    const savedName = localStorage.getItem('list-name');
    const newName = JSON.parse(savedName);
    return newName || initialName;
  });
  function handleListNameChange(e) {
    setListName(e.target.value);
  }
  useEffect(() => {
    localStorage.setItem("list-name",JSON.stringify(listName))
  }, [listName]);
  function displayList() {
    if(isTodo) {
      return <TodoApp />
    }
    if(isShopping) {
      return <Shopping />
    }
  }
  function handleClickDeleteBtn() {
    if(window.confirm('Clear all? ')) {
      localStorage.clear()
      window.location.reload(false)
    }
  }
  function handleClickSaveBtn() {
    alert('Saved!')
  }
  const now = new Date();
  const today = now.toDateString().split(' ').slice(0,3).join(' ')
  return (
    <ListsContainer>
      <Header 
        listName={listName} 
        onChange={handleListNameChange}
      />
      <p>{today}</p>
      {displayList()}
      <PrimaryButton 
        onClick={handleClickSaveBtn}
        style={{marginRight: '15px'}}>Save List</PrimaryButton>
      <PrimaryButton
        onClick={handleClickDeleteBtn}
      >Delete list</PrimaryButton>
    </ListsContainer>
  );
}
