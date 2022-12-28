import React, { Component } from 'react';

export class Select extends Component {
  render() {
    return (
      <select className="StatusSelect" onChange={this.props.onChange}>
        <option value="all">All</option>
        {this.props.options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    );
  }
}
