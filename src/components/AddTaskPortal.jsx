import { createPortal } from "react-dom";
import { useState } from "react";
export default function AddTaskPortal({
  dialogAdd,
  tasks,
  setTasks,
  handleClose,
}) {
  const [btnSelect, setBtnSelect] = useState(null);

  const [newTask, setNewTask] = useState({
    nameTask: undefined,
    status_id: 1,
    status: "ToDo",
    priority: "",
  });

  const handleSelect = (index) => {
    let priority = "";

    if (index === 1) priority = "Low";
    else if (index === 2) priority = "Medium";
    else if (index === 3) priority = "Hight";
    setNewTask({
      ...newTask,
      priority_id: index,
      priority,
    });
    setBtnSelect(index);
  };

  const [err, setErr] = useState(false);
  const handleAdd = () => {
    if (!newTask.nameTask) {
      setErr(true);
      return;
    }

    if (!newTask.priority) {
      return;
    }

    const nextId =
      tasks.length !== 0 ? Math.max(...tasks.map((item) => item.id)) + 1 : 0;

    const taskReplace = { ...newTask, id: nextId };

    const newTaskList = [...tasks];
    newTaskList.push(taskReplace);
    setTasks(newTaskList);
    setErr(false);
    handleClose();
    console.log(taskReplace.id);
  };
  return createPortal(
    <>
      <dialog ref={dialogAdd} className="w-50 bg-white p-3 rounded-4">
        <div className="d-flex align-items-center d-flex justify-content-between">
          <h3 className="fw-bold ">Add Task</h3>
          <svg
            onClick={() => handleClose()}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        <label className="w-100 mb-3">
          <p className="fw-bold text-muted">Task</p>
          <input
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, nameTask: e.target.value }))
            }
            type="text"
            className="w-100 border rounded-3 px-2 py-2  "
            placeholder="Enter name Task"
          />
          {err && <p className="text-danger">Task name must not be empty</p>}
        </label>

        <div>
          <p className="mb-1">Priority</p>
          <div className="d-flex gap-3">
            <button
              onClick={() => handleSelect(3)}
              className={`btn text-danger border border-danger ${btnSelect == 3 ? "box__button" : ""}`}
            >
              Hight
            </button>
            <button
              onClick={() => handleSelect(2)}
              className={`btn text-warning border border-warning ${btnSelect == 2 ? "box__button" : ""}`}
            >
              Medium
            </button>
            <button
              onClick={() => handleSelect(1)}
              className={`btn text-success border border-success ${btnSelect == 1 ? "box__button" : ""}`}
            >
              Low
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn btn-secondary"
            onClick={() => {
              handleAdd();
            }}
          >
            Add
          </button>
        </div>
      </dialog>
    </>,
    document.getElementById("portal"),
  );
}
