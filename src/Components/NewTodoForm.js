import React from "react";

const NewTodoForm = props => {
  return (
    <div>
      <form onSubmit={props.formSubmitted}>
        <label htmlFor="newTodo">NewTodoForm</label>
        <input
          type="text"
          onChange={props.newTodoChange}
          id="newTodo"
          name="newTodo"
          value={props.newTodo}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
