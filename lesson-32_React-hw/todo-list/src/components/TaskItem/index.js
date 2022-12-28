import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TaskItem.scss';

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
            className="TaskItem__editButton"
            onClick={() => this.props.onEditClick(this.props.id)}
          >
            Edit
          </button>
          <button
            className={`TaskItem__deleteButton ${
              this.props.isEdited ? ' _edited' : ''
            }`}
            disabled={this.props.isEdited}
            onClick={() => this.props.onDeleteClick(this.props.id)}
          >
            <i className="fa-solid fa-trash-can"></i>
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

TaskItem.propTypes = {
  taskText: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isEdited: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};
