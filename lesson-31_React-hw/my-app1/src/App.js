import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ClickCounter } from './components/ClickCounter';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Sidebar />
          <ClickCounter />
        </div>
      </div>
    );
  }
}
