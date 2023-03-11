import { useState, useContext } from "react";
import { TasksContext, TasksDispatchContext } from "../Context";

import { EditButton } from "../styles/Buttons.styled";
import { ItemContainer, ItemListContainer } from "../styles/Containers.styled";
import {
  EditItemInput,
  CheckboxInput,
  CustomCheckbox,
  CheckboxLabel,
  ItemWrapper,
} from "../styles/Inputs.styled";
import { ItemText } from "../styles/Text.styled";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  if(tasks) {
    return (
      <ItemContainer>
        <ItemListContainer style={{ listStyle: "none" }}>
          {tasks
            .filter((task) => !task.isChecked)
            .map((task, index) => (
              <ItemWrapper key={task.id} index={index}>
                <Task task={task} />
              </ItemWrapper>
            ))}
          {tasks
            .filter((task) => task.isChecked)
            .map((task, index) => (
              <ItemWrapper
                key={task.id}
                index={index}
                style={{ background: "#F7F6F4" }}
              >
                <Task task={task} disabled={true} />
              </ItemWrapper>
            ))}
        </ItemListContainer>
      </ItemContainer>
    );
  }
}

function Task({ task, disabled }) {
  let listItem;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  if (isEditing) {
    listItem = (
      <>
        <EditItemInput
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "edited",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <EditButton type="submit" onClick={handleEdit} disabled={disabled}>
          &#128077;
        </EditButton>
      </>
    );
  } else {
    listItem = (
      <>
        <ItemText>{task.text}</ItemText>
        <EditButton onClick={() => setIsEditing(true)} disabled={disabled}>
          &#9997;
        </EditButton>
      </>
    );
  }

  return (
    <CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        id="tasks"
        checked={task.isChecked}
        onChange={(e) => {
          dispatch({
            type: "edited",
            task: {
              ...task,
              isChecked: e.target.checked,
            },
          });
          console.log("changed!")
        }}
      />
      <CustomCheckbox />
      {listItem}
      <EditButton
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
        style={{ fontWeight: "600" }}
      >
        &#10005;
      </EditButton>
    </CheckboxLabel>
  );
}
