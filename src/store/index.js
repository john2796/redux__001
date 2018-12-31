const NEW_TODO_CHANGED = "NEW_TODO_CHANGED";

const initialState = {
  message: "Hello Coding Garden!",
  newTodo: "",
  todos: [
    {
      title: "Lean React",
      done: false
    },
    {
      title: "Learn JSX",
      done: false
    }
  ]
};

// ACTIONS
export const actions = {
  newTodoChanged(newTodo) {
    console.log(newTodo);
    return {
      type: NEW_TODO_CHANGED,
      newTodo: newTodo
    };
  }
};

// reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TODO_CHANGED: {
      return {
        ...state,
        newTodo: action.newTodo
      };
    }

    default:
      return state;
  }
};
