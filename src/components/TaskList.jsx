import "../App.css";

export default function TaskList({ task, setTask }) {
  // const data = JSON.parse(sessionStorage.getItem("data"));
  const priorityClass = {
    1: "text-success",
    2: "text-warning",
    3: "text-danger",
  };
  const progressClass = {
    1: "",
    2: "progress2",
    3: "progress3",
  };

  const handleDelete = (index) => {
    const newTasks = [];
    for (let i in task) {
      if (i == index) {
        continue;
      } else {
        newTasks.push(task.at(i));
      }
    }
    setTask(newTasks);
  };

  return (
    <div className="container">
      {task.map((item, index) => (
        <div
          key={index}
          className="row d-flex justify-content-between align-items-center bg-white rounded-4 px-4 py-3 mb-3"
        >
          <div className="col-4 d-flex flex-column justify-content-center">
            <p className="text-muted mb-1">Task</p>
            {/* <p className="fs-5 mb-0">{item.nameTask}</p> */}
            <input
              type="text"
              id={`taskName${index}`}
              value={item.nameTask}
              className="fs-5 mb-0 border-0"
            />
          </div>
          <div className="col-2">
            <p className="text-muted text-danger  mb-1">Priority</p>
            <p className={`fw-bolder mb-0 ${priorityClass[item.priority_id]}`}>
              {item.priority}
            </p>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <button className=" text-muted btn bg-light fw-bolder ">
              {item.status}
            </button>
          </div>

          <div className="col-2 d-flex justify-content-center">
            <span
              className={`process_icon ${progressClass[item.status_id]}`}
            ></span>
          </div>

          <div className="col-2">
            <label htmlFor={`taskName${index}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-pencil-square me-4"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </label>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="red"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
              onClick={() => handleDelete(index)}
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
