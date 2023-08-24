import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTask,
  completeTask,
  deleteTask,
  editTask,
} from "../redux/actions/actions";
import "./toDo.css";

const Todo = ({ tasks, addTask, completeTask, deleteTask, editTask }) => {
  const [taskName, setTaskName] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      addTask(taskName);
      setTaskName("");
    }
  };

  const handleEdit = (taskId) => {
    setEditingTaskId(taskId);
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      setTaskName(task.name);
    }
  };

  const handleSaveEdit = (taskId) => {
    if (taskName.trim() !== "") {
      editTask(taskId, taskName);
      setTaskName("");
      setEditingTaskId(null);
    }
  };

  const cancelEdit = () => {
    setTaskName("");
    setEditingTaskId(null);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            {editingTaskId === task.id && (
              <div>
                <input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={() => cancelEdit()}>Cancel</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  completeTask,
  deleteTask,
  editTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
