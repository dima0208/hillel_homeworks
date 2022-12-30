import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App-wrapper">
      <TodoList />
    </div>
  );
}

export default App;
