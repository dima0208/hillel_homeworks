import React, { Component } from 'react';
import './styles.css';

export class StatusSelect extends Component {
  render() {
    return (
      <select className="StatusSelect" onChange={this.props.onChange}>
        {this.props.options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    );
  }
}
