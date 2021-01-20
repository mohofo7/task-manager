import React from "react";
import { TASK_STATUS } from "src/utils/enum";

export interface ITask {
  title: string;
  description: string;
  status: TASK_STATUS;
  id: string;
}

interface ITaskContext {
  tasks: Array<ITask>;
  addTask?: (task: ITask) => void;
  getTask?: (id: string) => ITask;
  editTask?: (id: string, task: ITask) => void;
}

export const TaskContext = React.createContext<ITaskContext>({
  tasks: []
});