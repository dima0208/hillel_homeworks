import React, { Component } from 'react';
import './styles.css';

export class TaskItem extends Component {
  render() {
    return (
      <div className="TaskItem">
        <div className="TaskItem__text">
          {this.props.index + 1}. {this.props.taskValue}
        </div>
      </div>
    );
  }
}
