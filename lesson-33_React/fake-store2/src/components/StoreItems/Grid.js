import React, { Component } from 'react';
import styled from 'styled-components';

export class Grid extends Component {
  render() {
    return (
      // Выглядит не очень ---------------------------------------------------------
      <Container>
        {this.props.activeCategory === 'all'
          ? this.props.products.map((item) => {
              return (
                <Item key={item.id}>
                  <p>{item.title}</p>
                  <Image src={item.image} alt={item.image} />
                  <p>{item.price}</p>
                </Item>
              );
            })
          : this.props.products
              .filter((item) => {
                return item.category === this.props.activeCategory;
              })
              .map((item) => {
                return (
                  <Item key={item.id}>
                    <p>{item.title}</p>
                    <Image src={item.image} alt={item.image} />
                    <p>{item.price}</p>
                  </Item>
                );
              })}
      </Container>
      //   -----------------------------------------------------------------------------
    );
  }
}

// ------------------------CSS------------------------------
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Item = styled.div`
  max-width: 200px;
  padding: 5px;
  margin: 10px;
  border: 1px solid gainsboro;
  border-radius: 6px;
`;

const Image = styled.img`
  width: 100%;
`;
