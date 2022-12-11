import React from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      todos: [],
    };
  }
  render() {
    const { todos, name } = this.state;
    const doneCount = todos.filter((todo) => todo.done).length;
    const allCount = todos.filter((todo) => todo.name).length;
    const undoneCount = todos.filter((todo) => !todo.done).length;
    return (
      <div>
        <div className="main">
          <div className="info">
            <p>all: {allCount}</p>
            <p>done: {doneCount}</p>
            <p> undone: {undoneCount}</p>
          </div>
          <div className="inputTodo">
            <input
              value={name}
              onChange={this.handleSetName}
              className="name"
              onKeyDown={this.checkForEnter}
            />
            <button onClick={this.handleAddTodo} className="save">
              Save
            </button>
          </div>
        </div>
        <div className="todos">
          {this.state.todos.map((todo) => (
            <Todo
              name={todo.name}
              done={todo.done}
              onDone={this.handleSetDone}
              onDelete={this.handleDeleteTodo}
            />
          ))}
        </div>
      </div>
    );
  }
  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleAddTodo = () => {
    if (this.state.name != '') {
      const todo = {
        name: this.state.name,
        done: false,
      };
      this.setState({
        name: '',
        todos: this.state.todos.concat([todo]),
      });
    } else alert('Введите что-нибудь');
  };
  handleSetDone = (newDone, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name == name ? { name, done: newDone } : todo
      ),
    });
  };
  handleDeleteTodo = (name) => {
    this.setState({
      todos: this.state.todos.filter((e) => e.name !== name),
    });
  };
  checkForEnter = (e) => {
    if (e.keyCode == 13) {
      document.querySelector('.inputTodo .save').click();
    }
  };
}

export default App;
