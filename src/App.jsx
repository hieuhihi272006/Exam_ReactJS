import AddTask from "./components/AddTask";
import data from "./data.json";
import { useState } from "react";
import ListTask from "./components/ListTask";
function App() {
  const [tasks, setTasks] = useState(data);
  return (
    <>
      <div className="container">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
