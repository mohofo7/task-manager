import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import {ITask, TaskContext} from "src/contexts/TaskContext";
import Header from "src/components/Header";
import Home from "src/pages/Home";
import EditTask from "./pages/EditTask";

interface IApp {}

const App: React.FC<IApp> = (props: IApp) => {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const addTask = (task: ITask) => setTasks([...tasks, task]);
  const getTask = (id: string) => tasks.find(task => task.id === id);
  const editTask = (id: string, task: ITask) => {
    let newTasks = tasks;
    newTasks[newTasks.findIndex(task => task.id === id)] = task;
    setTasks(newTasks);
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, getTask, editTask }}>
      <Header />
      <Switch>
        <Route path="/edit/:task_id">
          <EditTask />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </TaskContext.Provider>
  );
};

export default App;
