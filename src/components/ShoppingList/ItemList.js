import React, {useState} from 'react'

function Item() {
  let item;

  return (
    <>
      <label htmlFor={item.id} />
        <input 
        type="checkbox" 
        id={item.id} 
        checked={item.isChecked}
        />
        {taskInput}
        <button
          onClick={() => onDecrease(item.id)}
        >-</button>
        {quantity}
        <button
          onClick={() => onIncrease(item.id)}
        >+</button>
    </>
  )
}

export default function ItemList() {

  return (
    <ul style={{listStyle: 'none'}}>
    {items.map(item => (
      <li key={item.id}>
        <Item 
          item={item}
          onDecrease={onDeleteItem}
          onIncrease={onIncreaseItem}
        />
      </li>
      )
    )}
    </ul>

  )
}
