import React, { useContext } from "react";
import { QuantityButton } from "../styles/Buttons.styled";
import {
  CheckboxInput,
  CheckboxLabel,
  CustomCheckbox,
  ItemWrapper,
} from "../styles/Inputs.styled";
import { TasksContext, TasksDispatchContext } from "../Context";
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
            <ItemWrapper key={item.id} index={index}>
              <Item item={item} />
            </ItemWrapper>
          ))}
        {items
          .filter((item) => item.isChecked)
          .map((item, index) => (
            <ItemWrapper
              key={item.id}
              index={index}
              style={{ background: "#F7F6F4" }}
            >
              <Item item={item} disabled={true}/>
            </ItemWrapper>
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
        onClick={(e) => {
          dispatch({
            type: "decreased",
            id: item.id,
          });
        }}
        disabled={disabled}
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
        disabled={disabled}
      >
        +
      </QuantityButton>
    </CheckboxLabel>
  );
}
