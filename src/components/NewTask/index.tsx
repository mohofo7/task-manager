import React, {useContext, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import { TASK_STATUS } from "src/utils/enum";
import { TaskContext } from "src/contexts/TaskContext";
import "./style.scss";

interface INewTask {}

export interface ITaskForm {
  title: string;
  description: string;
}

const formInitialValue: ITaskForm = {
  title: "",
  description: ""
};

const NewTask: React.FC<INewTask> = (props: INewTask) => {

  const [formValue, setFormValue] = useState<ITaskForm>(formInitialValue);
  const [errors, setErrors] = useState<ITaskForm>(formInitialValue);
  const { addTask } = useContext(TaskContext);
  const formOnSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (formValue.title.length <= 0) {
      setErrors({ ...errors, title: "Fill this field" });
      return;
    }
    if (formValue.description.length <= 0) {
      setErrors({ ...errors, description: "Fill this field" });
      return;
    }
    addTask({
      ...formValue,
      status: TASK_STATUS.TODO,
      id: uuidv4()
    });
    setFormValue(formInitialValue);
  };

  return (
    <div className="new-task container">
      <h2>Add a new Task</h2>
      <TextField
        id="title"
        label="Title"
        variant="filled"
        fullWidth
        value={formValue.title}
        onChange={e => setFormValue({ ...formValue, title: e.target.value })}
      />
      <TextField
        id="description"
        className="mt-2"
        label="Description"
        variant="filled"
        fullWidth
        multiline
        rows={4}
        value={formValue.description}
        onChange={e => setFormValue({ ...formValue, description: e.target.value })}
      />
      <Button
        className="new-task__submit"
        variant="contained"
        size="large"
        fullWidth
        startIcon={<AddIcon />}
        type="submit"
        onClick={formOnSubmit}
      >
        Add
      </Button>
    </div>
  )
};

export default NewTask;