import React, { useState, useReducer } from "react";

let initialItems = [];
let nextId = 0;
export default function Shopping() {
  const [inputValue, setInputValue] = useState("");
  const [items, dispatch] = useReducer(reducer, initialItems);

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
        return items.map(item => {
          if(item.id === action.name.id) {
            return action.name;
          } else {
            return item;
          }
        })
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
        return items.filter((item) => item.quantity >= 0)
                    .map((item) => {
                      if(item.id === action.id) {
                        return { 
                          ...item,
                          quantity: item.quantity--
                        }
                      } else return item;
                    })
      }
      default: {
        throw Error("unknown action: " + action.type);
      }
    }
  }
  function handleAddItem(item) {
    dispatch({
      type: "added",
      name: item,
      id: nextId++,
    });
  }
  function handleCompleteItem(item) {
    dispatch({
      type: "completed",
      name: item
    })
  }
  function handleQuantityChange(itemId, type) {
    dispatch({
      type: type,
      id: itemId
    });
  }

  return (
    <>
      {/* add item goes here */}
      <div>
        <input
          placeholder="add item"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <button
          onClick={() => {
            if (inputValue === "") {
              alert("Please enter item");
            } else {
              setInputValue("");
              handleAddItem(inputValue);
            }
          }}
        >
          +{" "}
        </button>
      </div>
      {/* item list goes here */}
      <ul style={{ listStyle: "none" }}>
        {" "}
        {/*list type none*/}
        {items.map((item) => (
          <li key={item.id}>
            <input 
              type="checkbox"
              checked={item.isChecked}
              onChange={(e) => {
                handleCompleteItem({
                  ...item,
                  isChecked: e.target.checked
                })
                }
              }
            />
            {item.name}
            <button
              onClick={() => handleQuantityChange(item.id, 'decreased')}
            >-</button>
            {item.quantity}
            <button
              onClick={() => handleQuantityChange(item.id, 'increased')}
            >+</button>
          </li>
        ))}
      </ul>
    </>
  );
}
