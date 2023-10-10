import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TaskFilter = ({ filterStatus, setFilterStatus }) => {
  return (
 
     
      <ButtonGroup>
        <Button
          variant={filterStatus === "all" ? "primary" : "outline-primary"}
          onClick={() => setFilterStatus("all")}
        >
          All
        </Button>
        <Button
          variant={filterStatus === "completed" ? "primary" : "outline-primary"}
          onClick={() => setFilterStatus("completed")}
        >
          Completed
        </Button>
        <Button
          variant={
            filterStatus === "inProgress" ? "primary" : "outline-primary"
          }
          onClick={() => setFilterStatus("inProgress")}
        >
          In progress
        </Button>
      </ButtonGroup>
   
  );
};

export default TaskFilter;
