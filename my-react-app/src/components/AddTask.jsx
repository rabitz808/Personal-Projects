import React from "react";

const AddTask = (props) => {
  return (
    <div className="addTask">
      <input
        autoFocus
        id="input"
        ref={props.input1}
        onChange={props.handleChange}
        type="text"
        onKeyDown={props.handleKeyDown}
      />
      <button style={{ backgroundColor: "green" }} onClick={props.addTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
