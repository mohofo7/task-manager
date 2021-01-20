import React, {useContext, useState} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {TextField} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import {ITask, TaskContext} from "src/contexts/TaskContext";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import {AVAILABLE_STATUS, TASK_STATUS} from "../../utils/enum";
import MenuItem from "@material-ui/core/MenuItem";
import { ITaskForm } from "src/components/NewTask";

interface IEditTask {}
interface IMatchParams {
  task_id: string;
}

const EditTask: React.FC<IEditTask> = (props: IEditTask) => {
  const { task_id } = useParams<IMatchParams>();
  const history = useHistory();
  const { getTask, editTask } = useContext(TaskContext);
  const [formValue, setFormValue] = useState<ITask>(getTask(task_id) || {
    title: '',
    description: '',
    id: '',
    status: TASK_STATUS.TODO
  });
  const [errors, setErrors] = useState<ITaskForm>({
    title: '',
    description: ''
  });

  const submitEditForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (formValue.title.length <= 0) {
      setErrors({ ...errors, title: "Fill this field" });
      return;
    }
    if (formValue.description.length <= 0) {
      setErrors({ ...errors, description: "Fill this field" });
      return;
    }
    editTask(formValue.id, formValue);
    history.push('/');
  };

  return (
    <div className="container d-flex flex-column">
      <h2>Edit Task</h2>
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
        className="mt-2 flex-fill"
        placeholder="Description"
        variant="filled"
        fullWidth
        multiline
        rows={15}
        value={formValue.description}
        onChange={e => setFormValue({ ...formValue, description: e.target.value })}
      />
      <Select
        variant="filled"
        className="mt-2"
        fullWidth
        value={formValue.status}
        onChange={e => setFormValue({ ...formValue, status: e.target.value as TASK_STATUS })}
      >
        <MenuItem value={formValue.status}>{formValue.status}</MenuItem>
        {AVAILABLE_STATUS[formValue.status].map(status => (
          <MenuItem value={status} key={status}>{status}</MenuItem>
        ))}
      </Select>
      <div className="mt-2 d-flex justify-content-between">
        <Button
          className="flex-grow-1 mr-2"
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
          type="submit"
          onClick={submitEditForm}
        >
          Edit
        </Button>
        <Link to="/" className="flex-grow-1">
          <Button
            variant="contained"
            fullWidth
            size="large"
            startIcon={<AddIcon />}
            type="submit"
          >
            Cancel
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EditTask;