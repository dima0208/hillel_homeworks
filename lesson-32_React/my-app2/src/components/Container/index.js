import React, { Component } from 'react';
import { Header } from '../Header';
import './styles.css';

export class Container extends Component {
  render() {
    return (
      <div
        className={`Container${this.props.theme ? ' ' + this.props.theme : ''}`}
      >
        <Header />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
