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
  const tasks = useContext(TasksContext);
  return (
    <ItemContainer>
      <ItemListContainer>
        {tasks
          .filter((task) => !task.isChecked)
          .map((task, index) => (
            <ListItem key={task.id} index={index}>
              <Item task={task} />
            </ListItem>
          ))}
        {tasks
          .filter((task) => task.isChecked)
          .map((task, index) => (
            <ListItem
              key={task.id}
              index={index}
              style={{ background: "#F7F6F4" }}
            >
              <Item task={task} disabled={true}/>
            </ListItem>
          ))}
      </ItemListContainer>
    </ItemContainer>
  );
}

function Item({ task, disabled }) {
  const dispatch = useContext(TasksDispatchContext);
  return (
    <CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        checked={task.isChecked}
        onChange={(e) => {
          dispatch({
            type: "completed",
            name: {
              ...task,
              isChecked: e.target.checked,
            },
          });
        }}
      />
      <CustomCheckbox />
      <ItemText>{task.name}</ItemText>
      <QuantityButton
        onClick={(e) => {
          dispatch({
            type: "decreased",
            id: task.id,
          });
        }}
        disabled={disabled}
      >
        -
      </QuantityButton>
      <PlainText>{task.quantity}</PlainText>
      <QuantityButton
        onClick={() => {
          dispatch({
            type: "increased",
            id: task.id,
          });
        }}
        disabled={disabled}
      >
        +
      </QuantityButton>
    </CheckboxLabel>
  );
}
