import React, { Component } from 'react';
import { Card } from './Card';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export class GridItems extends Component {
  render() {
    return (
      <Grid>
        {this.props.items
          .filter((item) => {
            if (this.props.activeCategory === 'all') {
              return item;
            } else {
              return item.category === this.props.activeCategory;
            }
          })
          .map((item) => (
            <Card key={item.id} {...item} />
          ))}
        ;
      </Grid>
    );
  }
}
