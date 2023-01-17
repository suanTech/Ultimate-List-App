import React, { useReducer } from "react";
import TaskList from './TaskList';
import AddTodo from './AddTodo'
import { PlainText } from "../styles/Text.styled";


let nextId = 0;
let initialTasks = [];
function TodoApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );
  function tasksReducer(tasks, action) {
    switch(action.type) {
      case 'added': {
        return [...tasks, {
          id: action.id,
          task: action.task,
          isChecked: false
        }]
      }
      case 'edited': {
        return tasks.map(task => {
          if(task.id === action.task.id) {
            return action.task;
          } else {
            return task;
          }
        })
      }
      case 'deleted': {
        return tasks.filter(task => task.id !== action.id)
      }
      default : {
        throw Error('unknown action: ' + action.type);
      }
    }
  }
  function handleAddTask(task) {
    dispatch( {
      type: 'added',
      id: nextId++,
      task: task,
    } )
  }
  function handleEditTask(task) {
    dispatch({
      type: 'edited',
      task: task
    })
  }
  function handleDeletedTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }
  const now = new Date();
  const today = now.toDateString().split(' ').slice(0,3).join(' ')
  return (
    <>
      <PlainText>{today}</PlainText>
       <AddTodo 
        onAddTask={handleAddTask}
       />
       <TaskList 
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeletedTask}
       />
    </>
  )
}


export default TodoApp