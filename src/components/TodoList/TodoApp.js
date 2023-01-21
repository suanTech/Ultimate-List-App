import { useReducer, useEffect } from "react";
import { TasksContext, TasksDispatchContext } from "../TasksContext";
import TaskList from "./TaskList";
import AddTodo from "./AddTodo";

let initialTasks = [];
const initializer = (initialValue = initialTasks) => 
  JSON.parse(localStorage.getItem("tasks")) || initialValue;
function TodoApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, [], initializer);
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks]);

  function tasksReducer(tasks, action) {
    switch (action.type) {
      case "added": {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            isChecked: false,
          },
        ];
      }
      case "edited": {
        return tasks.map((task) => {
          if (task.id === action.task.id) {
            return action.task;
          } else {
            return task;
          }
        });
      }
      case "deleted": {
        return tasks.filter((task) => task.id !== action.id);
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
          <AddTodo />
          <TaskList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

export default TodoApp;
