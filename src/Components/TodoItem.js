import React from "react";

const TodoItem = ({ todo, index, removeTodo, toggleTodoDone }) => {
  return (
    <li>
      <input
        type="text"
        onChange={event => toggleTodoDone(event, index)}
        type="checkbox"
        checked={todo.done}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "inherit"
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
