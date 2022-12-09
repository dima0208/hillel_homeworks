import React from 'react';
import './Sidebar.css';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar">
        <h3>Filter</h3>
        <div className="Sidebar__container">
          <ul className="Sidebar__menu-list">
            <li className="Sidebar__menu-item">Prop one</li>
            <li className="Sidebar__menu-item">Prop two</li>
            <li className="Sidebar__menu-item">Prop three</li>
            <li className="Sidebar__menu-item">Prop four</li>
          </ul>
        </div>
      </div>
    );
  }
}
