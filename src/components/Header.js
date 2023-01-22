import { useState, useEffect } from 'react'
import { ListNameContext } from './Context';
import { PrimaryButton } from './styles/Buttons.styled';
import { EditInput } from './styles/Header.styled';
import { ListName } from './styles/Text.styled';

export default function Header({initialName}) {
  const [listName, setListName] = useState(() => {
    const savedName = localStorage.getItem("list-name");
    const newName = JSON.parse(savedName);
    return newName ? newName : initialName;
  });
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("list-name", JSON.stringify(listName));
  }, [listName]);
  return (
    <ListNameContext.Provider value={listName}>
    {isEditing ? 
      <>
        <EditInput 
          type='text' 
          value={listName}
          onChange={(e)=> setListName(e.target.value)}
          style={{width: `${listName.length}ch`}}
        />
        <PrimaryButton
        onClick={() => setIsEditing(!isEditing)}>
        Save</PrimaryButton> 
      </>
      : 
      <>
        <ListName> {listName} </ListName>
        <PrimaryButton
      onClick={() => setIsEditing(!isEditing)}>
      Edit Name {'\u270D'}</PrimaryButton>
      </>
      }
      {/* when button clicks(edit mode) => */}
      {/* <input type='text' value="Todo List"/> */}
    </ListNameContext.Provider>
  )
}