import React, { useState } from 'react'
import { PrimaryButton } from '../styles/Buttons.styled';
import { AddItemInput } from '../styles/Inputs.styled';

export default function AddTodo({onAddTask}) {
  const [task, setTask] = useState('');

  return (
    <>
      <AddItemInput 
        placeholder='add task'
        onChange={e => {
          setTask(e.target.value)}
        }
        value={task}
      />
      <PrimaryButton onClick={() => {
          if(task === '') {
            alert('Please enter task')
          }
          else {
            setTask('')
            onAddTask(task)}
      }}>
        + </PrimaryButton>
    </>
  )
}
