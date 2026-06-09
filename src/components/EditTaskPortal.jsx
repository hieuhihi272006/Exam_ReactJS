import { createPortal } from "react-dom";
import { useState } from "react";
export default function EditTaskPortal({
  dialogEdit,
  taskEdit,
  //   tasks,
  setTasks,
  handleCloseEdit,
  setTaskEdit,
}) {
  const handleEdit = () => {
    if (taskEdit.nameTask === "") {
      setErr(true);
      return;
    }
    setTasks((prev) =>
      prev.map((item) =>
        item.id === taskEdit.id ? { ...item, ...taskEdit } : item,
      ),
    );
    setErr(false);
    handleCloseEdit();
  };
  const [err, setErr] = useState(false);

  const selectStatus = (item) => {
    let statusEdit = "";
    if (item == 1) {
      statusEdit = "ToDo";
    }
    if (item == 2) {
      statusEdit = "In progress";
    }
    if (item == 3) {
      statusEdit = "Done";
    }
    setTaskEdit({ ...taskEdit, status: statusEdit, status_id: item });
  };

  const selectPriority = (index) => {
    let priority = "";

    if (index === 1) priority = "Low";
    else if (index === 2) priority = "Medium";
    else if (index === 3) priority = "Hight";
    setTaskEdit({
      ...taskEdit,
      priority_id: index,
      priority,
    });
  };

  return createPortal(
    <>
      <dialog ref={dialogEdit} className="border p-3 rounded-4 w-50">
        <h3 className="fw-bold mb-4">Edit Task</h3>
        <label className="w-100 mb-3">
          <p className="fw-bold text-muted">Task Name</p>
          <input
            type="text"
            className="border w-75 rounded-3 p-1"
            value={taskEdit.nameTask ?? ""}
            onChange={(e) =>
              setTaskEdit((prev) => ({
                ...prev,
                nameTask: e.target.value,
              }))
            }
          />
          {err && <p className="text-danger">Task name must not be empty</p>}
        </label>
        <div>
          <p className="fw-bold text-muted">Priority</p>
          <div className="d-flex gap-2 mt-1">
            <button
              onClick={() => selectPriority(3)}
              className={`btn text-danger border-danger ${taskEdit.priority === "Hight" && "box__button"}`}
            >
              Hight
            </button>
            <button
              onClick={() => selectPriority(2)}
              className={`btn text-success border-success ${taskEdit.priority === "Medium" && "box__button"}`}
            >
              Medium
            </button>
            <button
              onClick={() => selectPriority(1)}
              className={`btn text-warning border-warning ${taskEdit.priority === "Low" && "box__button"}`}
            >
              Low
            </button>
          </div>
        </div>
        <div className="mt-3 ">
          <p className="fw-bold text-muted">Status</p>
          <div className="d-flex gap-2">
            <button
              onClick={() => selectStatus(1)}
              className={`btn text-warning border-warning ${taskEdit.status_id === 1 ? "box__button" : ""}`}
            >
              To Do
            </button>
            <button
              onClick={() => selectStatus(2)}
              className={`btn text-danger border-danger ${taskEdit.status_id === 2 ? "box__button" : ""}`}
            >
              In progress
            </button>
            <button
              onClick={() => selectStatus(3)}
              className={`btn text-success border-success ${taskEdit.status_id === 3 ? "box__button" : ""}`}
            >
              Done
            </button>
          </div>
        </div>
        <div className="d-flex mt-5 justify-content-end gap-3">
          <button className="btn btn-secondary" onClick={handleCloseEdit}>
            Cancel
          </button>
          <button className="btn btn-primary " onClick={() => handleEdit()}>
            Edit Task
          </button>
        </div>
      </dialog>
    </>,
    document.getElementById("portal"),
  );
}
