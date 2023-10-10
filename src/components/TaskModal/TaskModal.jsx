import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/slice/tasksSlice";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const TaskModal = ({ id, handleClose, show }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddTask = () => {
    if (!title || !description) {
      setShowAlert(true);
      return;
    }

    dispatch(
      updateTask({
        id: id,
        title,
        description,
        completed,
      })
    );
    const clearFormFields = () => {
      setTitle("");
      setDescription("");
      setCompleted(false);
    };
    clearFormFields();
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{id !== 0 ? "Edit task" : "New task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Task title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Input the task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Task description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Input the task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                label="Completed"
                checked={completed === true}
                onChange={() => setCompleted(true)}
              />
              <Form.Check
                type="radio"
                label="In progress"
                checked={completed === false}
                onChange={() => setCompleted(false)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <Alert
        variant="warning"
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        the title and description should not be empty !
      </Alert>
    </div>
  );
};

export default TaskModal;
