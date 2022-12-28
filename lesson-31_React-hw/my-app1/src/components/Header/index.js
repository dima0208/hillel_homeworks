import React from 'react';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h2 className="Header__logo">Some logo</h2>
        <nav className="Header__navigation">
          <ul className="Header__menu-list">
            <li className="Header__menu-item">Home</li>
            <li className="Header__menu-item">About</li>
            <li className="Header__menu-item">Pricing</li>
            <li className="Header__menu-item">Contacts</li>
            <li className="Header__menu-item">...</li>
          </ul>
        </nav>
      </header>
    );
  }
}
