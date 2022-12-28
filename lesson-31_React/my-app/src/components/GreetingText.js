import React from 'react';
const DEFAULT_NAME = 'Anonymus';

export class GreetingText extends React.Component {
  render() {
    return <p>Hello, {this.props.name || DEFAULT_NAME}</p>;
  }
}
