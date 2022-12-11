import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {
  render() {
    const { done, name } = this.props;
    return (
      <div className={done ? 'done' : ''}>
        <input type="checkbox" checked={done} onChange={this.handleCheck} />
        <span>{name}</span>
        <button className="delButton" onClick={this.handleCheckDeleteTodo}>
          del
        </button>
      </div>
    );
  }

  handleCheck = (e) => {
    const done = e.target.checked;
    this.props.onDone(done, this.props.name);
  };

  handleCheckDeleteTodo = () => {
    this.props.onDelete(this.props.name);
  };
}
