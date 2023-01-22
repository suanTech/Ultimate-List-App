import React, { useContext } from "react";
import { QuantityButton } from "../styles/Buttons.styled";
import {
  CheckboxInput,
  CheckboxLabel,
  CustomCheckbox,
  ListItem,
} from "../styles/Inputs.styled";
import { TasksContext, TasksDispatchContext } from "../TasksContext";
import { ItemContainer, ItemListContainer } from "../styles/Containers.styled";
import { ItemText, PlainText } from "../styles/Text.styled";
export default function ItemList() {
  const items = useContext(TasksContext);
  return (
    <ItemContainer>
      <ItemListContainer>
        {items
          .filter((item) => !item.isChecked)
          .map((item, index) => (
            <ListItem key={item.id} index={index}>
              <Item item={item} disabled={false} />
            </ListItem>
          ))}
        {items
          .filter((item) => item.isChecked)
          .map((item, index) => (
            <ListItem
              key={item.id}
              index={index}
              style={{ background: "#F7F6F4" }}
            >
              <Item item={item} disabled={true}/>
            </ListItem>
          ))}
      </ItemListContainer>
    </ItemContainer>
  );
}

function Item({ item, disabled }) {
  const dispatch = useContext(TasksDispatchContext);
  return (
    <CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        checked={item.isChecked}
        onChange={(e) => {
          dispatch({
            type: "completed",
            name: {
              ...item,
              isChecked: e.target.checked,
            },
          });
        }}
      />
      <CustomCheckbox />
      <ItemText>{item.name}</ItemText>
      <QuantityButton
        onClick={() => {
          dispatch({
            type: "decreased",
            id: item.id,
          });
        }}
        // disabled={disabled}
      >
        -
      </QuantityButton>
      <PlainText>{item.quantity}</PlainText>
      <QuantityButton
        onClick={() => {
          dispatch({
            type: "increased",
            id: item.id,
          });
        }}
        // disabled={disabled}
      >
        +
      </QuantityButton>
    </CheckboxLabel>
  );
}
