import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  newTodoChanged = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  formSubmitted = event => {
    event.preventDefault();

    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  };

  toggleTodoDone = (event, index) => {
    const todos = [...this.state.todos]; //copy arr
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    };
    this.setState({ todos });
  };

  removeTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({ todos });
  };

  allDone = () => {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted}
          newTodoChange={this.newTodoChanged}
        />
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone}
          removeTodo={this.removeTodo}
        />
        <button onClick={() => this.allDone()}>All Done</button>
      </div>
    );
  }
}

export default TodoApp;
