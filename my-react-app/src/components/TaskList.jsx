import React from "react";

const TaskList = (props) => {
  return (
    <div className="list">
      {props.todoList.map((task, index) => {
        return (
          <div
            className="task container"
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "grey" : "white",
            }}
          >
            <h2>{task.taskName}</h2>
            <div className="buttons">
              <button onClick={() => props.handleComplete(task.id)}>
                Complete
              </button>
              <button
                className="button-x"
                onClick={() =>
                  !task.editing
                    ? props.handleEdit(task.id)
                    : props.addChangeEdit(task.id)
                }
              >
                {task.editing ? "Confirm Change" : "Edit"}
              </button>
              <button
                style={{ backgroundColor: "Maroon" }}
                className="button-x"
                onClick={() => props.handleDelete(task.id)}
              >
                X
              </button>
            </div>
            <div className="break"></div>
            <div className="edit-text">
              {task.editing && (
                <input
                  onKeyDown={(e) => props.handleKeyDownEdit(e, task.id)}
                  type="text"
                  className="edit-input"
                  defaultValue={task.taskName}
                  onChange={props.handleChangeEdit}
                  autoFocus
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
