const NEW_TODO_CHANGED = "NEW_TODO_CHANGED";
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO_DONE = "TOGGLE_TODO_DONE";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_ALL_DONE = "TOGGLE_ALL_DONE";

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
  },
  addTodo(todo) {
    return {
      type: ADD_TODO,
      todo
    };
  },
  todoDone(toggle) {
    return {
      type: TOGGLE_TODO_DONE,
      toggle
    };
  },
  removeTodo(idx) {
    return {
      type: REMOVE_TODO,
      idx
    };
  },
  toggleAllDone(index) {
    return {
      type: TOGGLE_ALL_DONE,
      index
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
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case TOGGLE_TODO_DONE: {
      const todos = [...state.todos]; //copy arr
      todos[action.toggle.index] = {
        ...todos[action.toggle.index],
        done: action.toggle.checked
      };
      return {
        ...state,
        todos
      };
    }
    case REMOVE_TODO: {
      const todos = [...state.todos];
      todos.splice(action.idx, 1);
      return {
        ...state,
        todos
      };
    }
    case TOGGLE_ALL_DONE: {
      const todos = state.todos.map(todo => {
        return {
          title: todo.title,
          done: true
        };
      });
      return {
        ...state,
        todos
      };
    }

    default:
      return state;
  }
};
