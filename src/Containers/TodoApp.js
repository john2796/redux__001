import React, { Component } from "react";
import NewTodoForm from "../Components/NewTodoForm";
import TodoList from "../Components/TodoList";
import { connect } from "react-redux";
import { actions } from "../store/index";

export class TodoApp extends Component {
  // formSubmitted = event => {
  //   event.preventDefault();

  //   this.setState({
  //     newTodo: "",
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         title: this.state.newTodo,
  //         done: false
  //       }
  //     ]
  //   });
  // };

  // toggleTodoDone = (event, index) => {
  //   const todos = [...this.state.todos]; //copy arr
  //   todos[index] = {
  //     ...todos[index],
  //     done: event.target.checked
  //   };
  //   this.setState({ todos });
  // };

  // removeTodo = index => {
  //   const todos = [...this.state.todos];
  //   todos.splice(index, 1);

  //   this.setState({ todos });
  // };

  // allDone = () => {
  //   const todos = this.state.todos.map(todo => {
  //     return {
  //       title: todo.title,
  //       done: true
  //     };
  //   });

  //   this.setState({ todos });
  // };

  render() {
    const { message, newTodo, todos } = this.props;
    return (
      <div>
        <h3>{message}</h3>
        <NewTodoForm
          newTodo={newTodo}
          formSubmitted={this.props.formSubmitted}
          newTodoChange={this.props.onNewTodoChanged}
        />
        <TodoList
          todos={todos}
          toggleTodoDone={this.props.toggleTodoDone}
          removeTodo={this.props.removeTodo}
        />
        <button onClick={() => this.props.allDone()}>All Done</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  newTodo: state.newTodo,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onNewTodoChanged: newTodo => dispatch(actions.newTodoChanged(newTodo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
