import React from "react";
import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../../redux/slice/tasksSlice";
import editBtn from "../../img/edit.png";
import deleteBtn from "../../img/delete.png";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import "./TaskItem.css";

const TaskItem = ({ task, openModal }) => {
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };
  const onDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <ListGroup.Item action variant={task.completed ? "success" : "warning"}>
      <div className="d-flex justify-content-between align-items-center">
        <strong>Title : {task.title}</strong>
        <div className="description">{task.description}</div>

        <div className="d-flex justify-content-between align-items-center btns_cont flex-wrap">
          <div className="status">
            <strong>Status : </strong>{" "}
            <span>{task.completed ? "Done" : "In progress"}</span>
          </div>
          <Form.Check
            title="change status"
            type="switch"
            id={`custom-switch-${task.id}`}
            label=""
            className="ml-5"
            checked={task.completed}
            onChange={handleStatusChange}
          />
          <img
            src={editBtn}
            alt="edit"
            title="edit task"
            onClick={() => openModal(task.id)}
          />
          <img
            src={deleteBtn}
            alt="edit"
            title="delete task"
            onClick={onDeleteTask}
          />
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default TaskItem;
