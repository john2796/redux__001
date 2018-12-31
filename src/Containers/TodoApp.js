import React, { Component } from "react";
import NewTodoForm from "../Components/NewTodoForm";
import TodoList from "../Components/TodoList";
import { connect } from "react-redux";
import { actions } from "../store/index";

export class TodoApp extends Component {
  formSubmitted = event => {
    event.preventDefault();

    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false
    });

    this.props.onNewTodoChanged("");
  };

  toggleTodoDone = (event, index) => {
    this.props.onTodoDone({
      index,
      checked: event.target.checked
    });
  };

  render() {
    const { message, newTodo, todos } = this.props;
    return (
      <div>
        <h3>{message}</h3>
        <NewTodoForm
          newTodo={newTodo}
          formSubmitted={this.formSubmitted}
          newTodoChange={this.props.onNewTodoChanged}
        />
        <TodoList
          todos={todos}
          toggleTodoDone={this.toggleTodoDone}
          removeTodo={this.props.onRemoveTodo}
        />
        <button onClick={this.props.onToggleAllDone}>All Done</button>
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
  onNewTodoChanged: newTodo => dispatch(actions.newTodoChanged(newTodo)),
  onAddTodo: todo => dispatch(actions.addTodo(todo)),
  onTodoDone: toggle => dispatch(actions.todoDone(toggle)),
  onRemoveTodo: idx => dispatch(actions.removeTodo(idx)),
  onToggleAllDone: index => dispatch(actions.toggleAllDone(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
