import React, { Component } from 'react';
import styled from 'styled-components';

const CardElement = styled.div`
  width: 300px;
  border: 1px solid gainsboro;
  border-radius: 6px;
  margin: 0 15px 15px;
  padding: 0 5px;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Category = styled.span`
  font-size: bold;
`;

const Price = styled.p`
  text-transform: uppercase;
`;

export class Card extends Component {
  render() {
    return (
      <CardElement>
        <p>
          <Category>{this.props.category}</Category>:{this.props.title}
        </p>
        <Image src={this.props.image} alt={this.props.title} />
        <Price>{this.props.price} $</Price>
      </CardElement>
    );
  }
}
