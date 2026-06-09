import { createPortal } from "react-dom";
export default function DeleteTaskPortal({
  dialogDelete,
  handleCloseDelete,
  tasks,
  setTasks,
  idUserDelete,
}) {
  const handleDelete = () => {
    setTasks(tasks.filter((item) => item.id !== idUserDelete));
    handleCloseDelete();
  };
  return createPortal(
    <>
      <dialog
        className="w-50 p-4 rounded-4 border shadow-lg"
        ref={dialogDelete}
      >
        <h3 className="fw-bold mb-0">Delete Task</h3>
        <p className="text-muted">
          Are you sure you want to delete the task? This action cannot be
          undone.
        </p>
        <div className="d-flex justify-content-end gap-3 mt-5">
          <button className="btn btn-secondary" onClick={handleCloseDelete}>
            Cancel
          </button>
          <button className="btn bg-danger text-white" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </dialog>
    </>,
    document.getElementById("portal"),
  );
}
