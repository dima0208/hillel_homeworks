import React from 'react';
import { GreetingText } from './GreetingText';

export class GreetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(() => ({
      userInput: e.target[0].value,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <GreetingText name={this.state.userInput} />
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Your name" />
          <button type="submit">Save</button>
        </form>
      </React.Fragment>
    );
  }
}
