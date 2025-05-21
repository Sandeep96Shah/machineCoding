import React, { useState } from "react";
import { dummyTask } from "./constants";
import TaskList from "./TaskList";
import "./dnd1.css";

const DND1 = () => {
  const [tasks, setTasks] = useState(dummyTask);
  const getTasks = (status) =>
    tasks.filter((task) => task.status === status);

  const handleOnUpdate = ({ id, status }) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(formData);
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: crypto.randomUUID(), status: fields.status, title: fields.task },
    ]);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="form-container">
        <div className="fields-container">
          <div className="field-container">
            <label htmlFor="task">Task:</label>
            <input type="text" id="task" name="task" />
          </div>
          <div className="field-container">
            <label htmlFor="status">Status:</label>
            <select name="status" id="status">
              <option value="pending">Pending</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <button type="submit">Add Task</button>
      </form>
      <div className="dashboard-container">
        <TaskList
          tasks={getTasks("pending")}
          taskTitle="Pending"
          onUpdate={handleOnUpdate}
        />
        <TaskList
          tasks={getTasks("active")}
          taskTitle="Active"
          onUpdate={handleOnUpdate}
        />
        <TaskList
          tasks={getTasks("completed")}
          taskTitle="Completed"
          onUpdate={handleOnUpdate}
        />
      </div>
    </div>
  );
};

export default DND1;
