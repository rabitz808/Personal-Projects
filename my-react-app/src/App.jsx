import React, { useRef } from "react";
import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  //Autofocus input after submit
  const input1 = useRef(null);
  //Autofocus input after edit
  const input2 = useRef(null);
  //Array of tasks that make up the todo list
  const [todoList, setTodoList] = useState([]);
  //Keep track of task typed into input
  const [newTask, setNewTask] = useState("");
  const [newTaskEdit, setNewTaskEdit] = useState("");
  //Keep track of editing mode
  const [editTask, setEditTask] = useState(false);

  //Add input as new task
  const handleChange = (e) => {
    return setNewTask(e.target.value);
  };

  //Add new task to todo list
  const addTask = () => {
    if (document.getElementById("input").value !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        completed: false,
        editing: false,
      };
      setTodoList([...todoList, task]);
      document.getElementById("input").value = "";
      input1.current.focus();
    }
  };

  //Handle enter press on input
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  //Handle enter press on input for edit
  const handleKeyDownEdit = (event, id) => {
    if (event.key === "Enter") {
      addChangeEdit(id);
    }
  };

  //Handle delete
  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  //Handle complete
  const handleComplete = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  //Handle edit
  const handleEdit = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, editing: !task.editing };
        } else {
          return task;
        }
      })
    );
  };

  //Handle change edit
  const handleChangeEdit = (e) => {
    return setNewTaskEdit(e.target.value);
  };

  //Add change edit as new task
  const addChangeEdit = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, taskName: newTaskEdit, editing: false };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <Title />
      <AddTask
        addTask={addTask}
        input1={input1}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <TaskList
        todoList={todoList}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        editTask={editTask}
        handleChangeEdit={handleChangeEdit}
        addChangeEdit={addChangeEdit}
        handleKeyDownEdit={handleKeyDownEdit}
      />
    </div>
  );
}

export default App;
