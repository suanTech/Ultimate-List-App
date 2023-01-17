import React, {useState} from 'react'
import { PrimaryButton } from './styles/Buttons.styled';
import { EditInput } from './styles/Header.styled';
import { ListName } from './styles/Text.styled';
export default function Header({listName, onChange}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
    {isEditing ? 
      <>
        <EditInput 
          type='text' 
          value={listName}
          onChange={onChange}
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
    </>
  )
}