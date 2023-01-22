import { createContext } from 'react';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

const ListNameContext = createContext(null)

export {TasksContext, TasksDispatchContext, ListNameContext}