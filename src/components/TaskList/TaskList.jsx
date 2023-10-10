import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Button} from "react-bootstrap";
import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskModal from "../TaskModal/TaskModal";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.taskReducer);
  const [id, setId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const openModal = (taskId) => {
    setIsModalOpen(true);
    setId(taskId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "all") {
      return true;
    }
    return task.completed === (filterStatus === "completed");
  });

  return (
    <div>
      <TaskModal handleClose={closeModal} show={isModalOpen} id={id} />
      <div className="wrap">
        <div className="d-flex justify-content-between mt-4 mb-4">
          <Button variant="outline-dark" onClick={() => openModal(0)}>
            Add new task +
          </Button>
          <TaskFilter
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>
        <ListGroup>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} openModal={openModal} />
          ))}
        </ListGroup>
      </div>
      <h2 className="text-center" > {tasks.length < 1 ? "There are no tasks yet.":""}</h2>
    </div>
  );
};

export default TaskList;
