import React, { useContext } from "react";
import { TaskContext } from "src/contexts/TaskContext";
import "./style.scss";
import Card from "../Card";

interface ITasks {}

const Tasks: React.FC<ITasks> = (props: ITasks) => {

  const { tasks } = useContext(TaskContext);

  return (
    <div className="tasks">
      <div className="container">
        <h2 className="tasks__title">Tasks</h2>
      </div>
      <div className="tasks__wrapper container">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <Card
              title={task.title}
              description={task.description}
              status={task.status}
              key={task.id}
              id={task.id}
            />
          ))
        ) : (
          <span>
            You have nothing to do.
            Go get some sleep.
          </span>
        )}
      </div>
    </div>
  );
};

export default Tasks;