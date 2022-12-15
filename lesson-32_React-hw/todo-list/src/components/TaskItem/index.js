import React, { Component } from 'react';
import './styles.css';

export class TaskItem extends Component {
  render() {
    return (
      <div className={`TaskItem ${this.props.isEdited ? ' _edited' : ''}`}>
        <p className={`TaskItem__text ${this.props.isDone ? ' _crossed' : ''}`}>
          {this.props.index + 1}. {this.props.taskText}
        </p>
        <div className="TaskItem__interaction-container">
          <button
            disabled={this.props.isEdited}
            onClick={() => this.props.onDeleteClick(this.props.id)}
          >
            Delete
          </button>
          <button
            disabled={this.props.isEdited}
            onClick={() => this.props.onEditClick(this.props.id)}
          >
            Edit
          </button>
          <input
            className="TaskItem__checkbox"
            type="checkbox"
            checked={this.props.isDone}
            disabled={this.props.isEdited}
            onChange={() => this.props.onStatusChange(this.props.id)}
          />
        </div>
      </div>
    );
  }
}
