import { useState, useEffect } from "react";
import { PrimaryButton } from "./styles/Buttons.styled";
import { EditInput } from "./styles/Header.styled";
import { ListName } from "./styles/Text.styled";

export default function Header({ initialName }) {
  const getStorageData = (keyName, defaultValue) => {
    const savedItem = localStorage.getItem(keyName);
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || defaultValue;
  };
  const [listName, setListName] = useState(()=> {
    return getStorageData('list-name', initialName)
  });
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("list-name", JSON.stringify(listName));
  }, [listName]);
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
