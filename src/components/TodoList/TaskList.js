import React, { useState } from "react";
import { SecondaryButton } from "../styles/Buttons.styled";
import { ItemContainer } from "../styles/Containers.styled";
import { EditItemInput, ItemList, ListItem, CheckboxInput, CustomCheckbox, CheckboxLabel } from "../styles/Inputs.styled";
import { ItemText } from "../styles/Text.styled";

function Task({ task, onEdit, onDelete }) {
  let listItem;
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    listItem = (
      <>
        <EditItemInput
          value={task.task}
          onChange={(e) =>
            onEdit({
              ...task,
              task: e.target.value,
            })
          }
        />
        <SecondaryButton onClick={() => setIsEditing(false)}>Save</SecondaryButton>
      </>
    );
  } else {
    listItem = (
      <>
        <ItemText>{task.task}</ItemText>
        <SecondaryButton onClick={() => setIsEditing(true)}>{'\u00B7'}</SecondaryButton>
      </>
    );
  }

  return (
    <CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        id="tasks"
        checked={task.isChecked}
        onChange={(e) =>
          onEdit({
            ...task,
            isChecked: e.target.checked,
          })
        }
      />
      <CustomCheckbox/>
      {listItem}
      <SecondaryButton onClick={() => onDelete(task.id)}>-</SecondaryButton>
    </CheckboxLabel>
  );
}

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <ItemContainer>
      <ItemList style={{ listStyle: "none" }}>
        {" "}
        {/*list type none*/}
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Task task={task} onEdit={onEditTask} onDelete={onDeleteTask} />
          </ListItem>
        ))}
      </ItemList>
    </ItemContainer>
  );
}
