import React from 'react';
import './App.css';
import { GreetingForm } from './components/GreetingForm';
import { Timer } from './components/Timer';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GreetingForm />
        <Timer />
      </div>
    );
  }
}
