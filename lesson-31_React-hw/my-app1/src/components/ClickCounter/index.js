import React from 'react';
import './ClickCounter.css';

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prev) => ({
      counter: ++prev.counter,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <p>
            You've clicked on button {this.state.counter || 'not once'} times
          </p>
          <button className="ClickCounter__button" type="submit">
            CLick
          </button>
        </form>
      </React.Fragment>
    );
  }
}
