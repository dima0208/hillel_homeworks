import React, { Component } from 'react';
import { v4 } from 'uuid';
import { Select } from './Select';
import { UserItem } from './UserItem';

const All = '0';
const SIMPLE = '1';
const ADMIN = '2';

const SELECT_OPTIONS = [
  {
    text: 'All',
    value: All,
  },
  {
    text: 'Simple',
    value: SIMPLE,
  },
  {
    text: 'Admin',
    value: ADMIN,
  },
];

export class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name: '',
      phone: '',
      userTypeToShow: All,
    };
  }

  onNameChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  onPhoneChangeHandler = (e) => {
    if (/^[\d]*$/.test(e.target.value) || !e.target.value)
      this.setState((prev) => ({
        ...prev,
        phone: e.target.value,
      }));
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (this.state.name && this.state.phone)
      this.setState((prev) => ({
        name: '',
        phone: '',
        users: [
          ...prev.users,
          {
            name: this.state.name,
            phone: this.state.phone,
            id: v4(),
            isAdmin: false,
          },
        ],
      }));
  };

  onStatusChangeHadler = (userId) => {
    this.setState((prev) => ({
      ...prev,
      users: prev.users.map((user) => {
        if (user.id !== userId) {
          return user;
        } else {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
      }),
    }));
  };

  onSelectChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      userTypeToShow: e.target.value,
    }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input
            placeholder="Name"
            onChange={this.onNameChangeHandler}
            value={this.state.name}
          />
          <input
            placeholder="Phone"
            onChange={this.onPhoneChangeHandler}
            value={this.state.phone}
          />
          <button type="submit">Save</button>
        </form>
        <Select
          label="Show users:"
          options={SELECT_OPTIONS}
          onChange={this.onSelectChangeHandler}
        />
        <div className="usersList">
          {this.state.users
            .filter((item) => {
              if (this.state.userTypeToShow === ADMIN) {
                return item.isAdmin === true;
              } else if (this.state.userTypeToShow === SIMPLE) {
                return item.isAdmin === false;
              } else {
                return item;
              }
            })
            .map(({ name, phone, id, isAdmin }, index) => (
              <UserItem
                key={id}
                id={id}
                name={name}
                phone={phone}
                index={index}
                isAdmin={isAdmin}
                onStatusChange={this.onStatusChangeHadler}
              />
            ))}
        </div>
      </>
    );
  }
}
