import React, { useReducer, useEffect } from "react";
import { TasksContext, TasksDispatchContext } from "../TasksContext";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

let initialTasks = [];
const initializer = (initialValue = initialTasks) => 
  JSON.parse(localStorage.getItem("tasks")) || initialValue;
export default function Shopping() {
  const [tasks, dispatch] = useReducer(reducer, [], initializer);
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks]);
  function reducer(tasks, action) {
    switch (action.type) {
      case "added": {
        return [
          ...tasks,
          {
            id: action.id,
            name: action.name,
            quantity: 1,
            isChecked: false,
          },
        ];
      }
      case "completed": {
        return tasks.map((item) => {
          if (item.id === action.name.id) {
            return action.name;
          } else {
            return item;
          }
        });
      }
      case "deleted": {
        return tasks.filter((item) => item.id !== action.id);
      }
      case "increased": {
        return tasks.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity++,
            };
          } else return item;
        });
      }
      case "decreased": {
        return tasks
          .filter((item) => item.quantity >= 0)
          .map((item) => {
            if (item.id === action.id) {
              return {
                ...item,
                quantity: item.quantity--,
              };
            } else return item;
          });
      }
      default: {
        throw Error("unknown action: " + action.type);
      }
    }
  }
  return (
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {/* add item goes here */}
          <AddItem />
          {/* item list goes here */}
          <ItemList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}
