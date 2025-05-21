import React from 'react';
import "./dnd1.css";

const TaskList = ({
  tasks,
  taskTitle,
  onUpdate,
}) => {
  const taskStatus = taskTitle.toLowerCase()
  
  const handleOnDragOver = (event) => {
    event.preventDefault();
  };

  const handleOnDragStart = ({
    event,
    id,
  }) => {
    event.dataTransfer.setData("sourceId", id);
  };

  const handleUpdateTaskStatus = ({
    id,
    status,
  }) => {
    onUpdate({ id, status });
  };

  const handleOnDrop = ({
    event,
    status,
  }) => {
    const id = event.dataTransfer.getData("sourceId");
    handleUpdateTaskStatus({ id, status });
  };

  return (
    <div
      className="state-container"
      onDragOver={handleOnDragOver}
      onDrop={(event) =>
        handleOnDrop({ event, status: taskStatus })
      }
    >
      <p className="title">{taskTitle}</p>
      {tasks.map(({ title, id }) => (
        <div
          className="task"
          key={id}
          draggable
          onDragStart={(event) => handleOnDragStart({ event, id })}
        >
          <p>{title}</p>
          <select
            defaultValue={taskStatus}
            onChange={(event) =>
                handleUpdateTaskStatus({ id, status: event.target.value })
            }
          >
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
