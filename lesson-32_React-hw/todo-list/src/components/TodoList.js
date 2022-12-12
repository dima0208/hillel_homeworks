import React, { Component } from 'react';
import { v4 } from 'uuid';
import './TodoList.css';
import { TaskItem } from './TaskItem';

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskValue: '',
      tasks: [],
    };
  }

  onChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      taskValue: e.target.value,
    }));
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.taskValue)
      this.setState((prev) => ({
        taskValue: '',
        tasks: [
          ...prev.tasks,
          {
            taskValue: this.state.taskValue,
            id: v4(),
          },
        ],
      }));
  };

  render() {
    return (
      <div className="TodoList">
        <form className="TodoList__form" onSubmit={this.onSubmitHandler}>
          <h2>What to do?</h2>
          <input
            onChange={this.onChangeHandler}
            value={this.state.taskValue}
          ></input>
          <button>Add</button>
        </form>
        <div className="TodoList__list">
          {this.state.tasks.map(({ taskValue, id }, index) => (
            <TaskItem key={id} taskValue={taskValue} index={index} />
          ))}
        </div>
      </div>
    );
  }
}
