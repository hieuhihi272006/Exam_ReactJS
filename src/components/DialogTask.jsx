import { createPortal } from "react-dom";
import { useState } from "react";
import "../App.css";
export default function DiaLogTask({ ref, close, setTasks, tasks }) {
  const [task, setTask] = useState({
    nameTask: "",
    status_id: 1,
    status: "ToDo",
    priority_id: undefined,
    priority: "",
  });

  const [error, setError] = useState(false);

  const [buttonSelect, setSelect] = useState(null);

  const addTask = () => {
    if (task.nameTask == "" || task.nameTask.length >= 100) {
      setError(true);
      return;
    }
    if (task.priority_id === undefined) {
      return;
    }
    if (task.nameTask !== "" && task.nameTask.length < 100) {
      setError(false);

      const taskList = [...tasks];
      taskList.push(task);

      setTasks(taskList);

      close();
    }
  };

  const choosePriority = (index) => {
    let priority = "";

    if (index === 1) priority = "Low";
    else if (index === 2) priority = "Medium";
    else if (index === 3) priority = "High";
    setSelect(index);
    setTask({
      ...task,
      priority_id: index,
      priority,
    });
  };

  return createPortal(
    <dialog className="w-50 p-3 border rounded-3" ref={ref}>
      <div className="position-relative p-3 pb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-bold">Add Task</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={close}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        <label className="text-muted w-100 mb-3" id="box__input">
          Task
          <br />
          <input
            type="text"
            placeholder="Type your task here..."
            className="w-100 mt-2 rounded-4 border p-2 px-3"
            onChange={(e) => {
              setTask({ ...task, nameTask: e.target.value });
            }}
          />
          {error && (
            <p className="mb-0 text-danger ">
              Task name cannot be empty and must be less than 100 characters.
            </p>
          )}
        </label>
        <div className="text-muted mb-4 ">
          Priority
          <div className="d-flex gap-3 mt-1">
            <button
              className={`btn border-danger text-danger fw-bold px-4 ${buttonSelect == 3 ? "box__button" : ""}`}
              onClick={() => choosePriority(3)}
            >
              Hight
            </button>
            <button
              className={`btn border-warning text-warning fw-bold px-4 ${buttonSelect == 2 ? "box__button" : ""}`}
              onClick={() => choosePriority(2)}
            >
              Medium
            </button>
            <button
              className={`btn border-success text-success fw-bold px-4 ${buttonSelect == 1 ? "box__button" : ""}`}
              onClick={() => choosePriority(1)}
            >
              Low
            </button>
          </div>
        </div>
        <button
          className="btn btn-secondary position-absolute end-0 bottom-0"
          onClick={addTask}
        >
          Add
        </button>
      </div>
    </dialog>,
    document.getElementById("portal"),
  );
}
