import React, { Component } from 'react';
import styled from 'styled-components';

export class CategorySelect extends Component {
  render() {
    return (
      <div>
        <Select onChange={this.props.onSelectChange}>
          <option value="all">All</option>
          {this.props.categories.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
      </div>
    );
  }
}

// ------------------------CSS-------------------------
const Select = styled.select`
  width: 100px;
  margin: 0 auto;
`;
