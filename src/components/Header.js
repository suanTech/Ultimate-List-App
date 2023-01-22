import { useState, useEffect } from "react";
import { PrimaryButton } from "./styles/Buttons.styled";
import { EditInput } from "./styles/Header.styled";
import { ListName } from "./styles/Text.styled";

export default function Header({ initialName }) {
  const [listName, setListName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("list-name", JSON.stringify(listName));
  }, [listName]);
  useEffect(() => {
    const savedName = JSON.parse(localStorage.getItem('list-name'))
    if(savedName) {
      setListName(savedName)
    } 
  },[])
  return (
    <>
      {isEditing ? (
        <>
          <EditInput
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            style={{ width: `${listName.length}ch` }}
          />
          <PrimaryButton onClick={() => setIsEditing(!isEditing)}>
            Save
          </PrimaryButton>
        </>
      ) : (
        <>
          <ListName> {listName} </ListName>
          <PrimaryButton onClick={() => setIsEditing(!isEditing)}>
            Edit Name {"\u270D"}
          </PrimaryButton>
        </>
      )}
    </>
  );
}
