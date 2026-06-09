import { useRef } from "react";
import AddTaskPortal from "./AddtaskPortal";
export default function AddTask({ tasks, setTasks }) {
  const dialogAdd = useRef();

  const handleClose = () => {
    dialogAdd.current.close();
  };

  
  return (
    <>
      <div className="d-flex align-items-center justify-content-between py-4">
        <h1>Task List</h1>
        <button
          onClick={() => dialogAdd.current.showModal()}
          className="btn d-flex gap-2 btn-primary align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          Add Task
        </button>
      </div>
      <AddTaskPortal
        dialogAdd={dialogAdd}
        tasks={tasks}
        setTasks={setTasks}
        handleClose={handleClose}
      />
    </>
  );
}
