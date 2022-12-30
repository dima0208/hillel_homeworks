import React, { Component } from 'react';
import { v4 } from 'uuid';
import './TodoList.scss';
import { StatusSelect } from '../StatusSelect';
import { TaskItem } from '../TaskItem';

const All = 'all';
const PENDING = 'pend';
const DONE = 'done';

const SELECT_OPTIONS = [
  {
    text: 'All',
    value: All,
  },
  {
    text: 'Pending',
    value: PENDING,
  },
  {
    text: 'Done',
    value: DONE,
  },
];

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: '',
      id: null,
      isDone: false,
      showTasks: All,
      error: false,
      isEdited: false,
      tasks: [],
    };
  }

  onChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      taskText: e.target.value,
      error: false,
    }));
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (!this.state.taskText) {
      this.setState((prev) => ({
        ...prev,
        error: true,
      }));
      return;
    }
    if (!this.state.id) {
      this.setState((prev) => ({
        taskText: '',
        tasks: [
          ...prev.tasks,
          {
            taskText: this.state.taskText,
            isDone: this.state.isDone,
            id: v4(),
            isEdited: this.state.isEdited,
          },
        ],
      }));
    } else {
      this.setState((prev) => ({
        taskText: '',
        id: null,
        isEdited: false,
        tasks: prev.tasks.map((item) => {
          if (item.id === this.state.id) {
            return {
              ...item,
              taskText: this.state.taskText,
              isEdited: false,
            };
          } else {
            return item;
          }
        }),
      }));
    }
  };

  onStatusChangeHundler = (taskId) => {
    this.setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((item) => {
        if (item.id !== taskId) {
          return item;
        } else {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
      }),
    }));
  };

  onStatusSelectHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      showTasks: e.target.value,
    }));
  };

  onEditButtonHandler = (taskId) => {
    const editedTask = this.state.tasks.find((item) => {
      return item.id === taskId;
    });
    this.setState((prev) => ({
      ...prev,
      id: taskId,
      taskText: editedTask.taskText,
      error: false,
      isEdited: true,
      tasks: prev.tasks.map((item) => {
        if (item.id !== taskId) {
          return {
            ...item,
            isEdited: false,
          };
        } else {
          return {
            ...item,
            isEdited: true,
          };
        }
      }),
    }));
  };

  onDeleteButtonHandler = (taskId) => {
    this.setState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((item) => {
        return item.id !== taskId;
      }),
    }));
  };

  getTodosByFilterOption(stateTask) {
    return this.state.tasks.filter((task) => {
      if (stateTask === PENDING) return !task.isDone;
      if (stateTask === DONE) return task.isDone;
      return task;
    });
  }

  render() {
    return (
      <div className="TodoList">
        <form className="TodoList__form" onSubmit={this.onSubmitHandler}>
          <h2>What to do?</h2>
          <div className="TodoList__inputField">
            <input
              className={`TodoList__form-input ${
                this.state.error ? ' _error' : ''
              }`}
              onChange={this.onChangeHandler}
              value={this.state.taskText}
            ></input>
            <button className="TodoList__button">
              {this.state.isEdited ? 'Save changes' : 'Add'}
            </button>
          </div>
        </form>
        <StatusSelect
          options={SELECT_OPTIONS}
          onChange={this.onStatusSelectHandler}
        />
        <div className="TodoList__list">
          {this.getTodosByFilterOption(this.state.showTasks).map(
            ({ taskText, id, isDone, isEdited }, index) => (
              <TaskItem
                key={id}
                id={id}
                taskText={taskText}
                index={index}
                isDone={isDone}
                isEdited={isEdited}
                onStatusChange={this.onStatusChangeHundler}
                onEditClick={this.onEditButtonHandler}
                onDeleteClick={this.onDeleteButtonHandler}
              />
            )
          )}
        </div>
      </div>
    );
  }
}
