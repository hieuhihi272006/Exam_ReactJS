import TaskList from "./components/TaskList.jsx";
import DiaLogTask from "./components/DialogTask.jsx";
import { useRef, useState } from "react";
import data from "./data.json";
function App() {
  const dialog = useRef();
  // localStorage.setItem("data", JSON.stringify(data));
  const [tasks, setTask] = useState(data);
  // const [tasks, setTask] = useState(JSON.parse(localStorage.getItem("data")));

  const closeDialog = () => {
    dialog.current.close();
  };

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-5">
          <h1>Task List</h1>
          <button
            className="bg-primary btn d-flex justify-content-center align-items-center gap-2 rounded-4 px-4"
            onClick={() => dialog.current.showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
            Add Task
          </button>
        </div>
        <TaskList task={tasks} setTask={setTask} />
        <DiaLogTask
          ref={dialog}
          close={closeDialog}
          setTasks={setTask}
          tasks={tasks}
        />
      </div>
    </>
  );
}

export default App;
