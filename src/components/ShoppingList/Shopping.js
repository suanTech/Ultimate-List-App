import React, { useReducer, useEffect } from "react";
import { TasksContext, TasksDispatchContext } from "../TasksContext";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

let initialItems = [];
const initializer = (initialValue = initialItems) => 
  JSON.parse(localStorage.getItem("items")) || initialValue;
export default function Shopping() {
  const [items, dispatch] = useReducer(reducer, [], initializer);
  useEffect(() => {
    localStorage.setItem("items",JSON.stringify(items))
  }, [items]);
  function reducer(items, action) {
    switch (action.type) {
      case "added": {
        return [
          ...items,
          {
            id: action.id,
            name: action.name,
            quantity: 1,
            isChecked: false,
          },
        ];
      }
      case "completed": {
        return items.map((item) => {
          if (item.id === action.name.id) {
            return action.name;
          } else {
            return item;
          }
        });
      }
      case "deleted": {
        return items.filter((item) => item.id !== action.id);
      }
      case "increased": {
        return items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity++,
            };
          } else return item;
        });
      }
      case "decreased": {
        return items
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
      <TasksContext.Provider value={items}>
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
