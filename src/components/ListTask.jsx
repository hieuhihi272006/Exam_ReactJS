import "../App.css";
import DeleteTaskPortal from "./DeleteTaskPortal";
import EditTaskPortal from "./EditTaskPortal";
import { useRef, useState } from "react";
export default function ListTask({ tasks, setTasks }) {
  const priorityClass = {
    Hight: "text-danger",
    Medium: "text-success",
    Low: "text-warning",
  };

  const statusClass = {
    1: "",
    2: "status1",
    3: "status2",
  };

  const [idUserDelete, setUserDelete] = useState(undefined);

  const handleDeleteTask = (id) => {
    setUserDelete(id);
    dialogDelete.current.showModal();
  };

  const handleCloseDelete = () => {
    dialogDelete.current.close();
  };

  const handleCloseEdit = () => {
    dialogEdit.current.close();
  };

  const dialogDelete = useRef();
  const dialogEdit = useRef();

  const [taskEdit, setTaskEdit] = useState({});

  const showEditPortal = (item) => {
    setTaskEdit(item);
    dialogEdit.current.showModal();
  };

  return (
    <>
      <div>
        {tasks.map((item, index) => (
          <div
            className="row bg-white p-3 rounded-4 mb-3 align-items-center"
            key={index}
          >
            <div className="col-4">
              <p className="text-muted fw-bold mb-0">Task</p>
              <p className="mb-0">{item.nameTask}</p>
            </div>
            <div className="col-2">
              <p className="text-muted fw-bold mb-0">Priority</p>
              <p className={`mb-0 fw-bold ${priorityClass[item.priority]}`}>
                {" "}
                {item.priority}
              </p>
            </div>
            <div className="col-2">
              <button className="btn bg-body-secondary fw-bold text-muted">
                {item.status}
              </button>
            </div>
            <div className="col-2">
              <span className={`status ${statusClass[item.status_id]}`}></span>
            </div>
            <div className="col-2 d-flex gap-3 ">
              <svg
                onClick={() => showEditPortal(item)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
              <svg
                onClick={() => handleDeleteTask(item.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="red"
                className="bi bi-trash3 "
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <DeleteTaskPortal
        dialogDelete={dialogDelete}
        handleCloseDelete={handleCloseDelete}
        tasks={tasks}
        setTasks={setTasks}
        idUserDelete={idUserDelete}
      />
      <EditTaskPortal
        dialogEdit={dialogEdit}
        taskEdit={taskEdit}
        tasks={tasks}
        setTasks={setTasks}
        handleCloseEdit={handleCloseEdit}
        setTaskEdit={setTaskEdit}
      />
    </>
  );
}
