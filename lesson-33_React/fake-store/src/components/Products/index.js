import React, { Component } from 'react';
import { GridItems } from '../GridItems';
import { Select } from '../GridItems/Select';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      activeCategory: 'all',
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => this.setState(() => ({ products: json })));

    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => this.setState(() => ({ categories: json })));
  }

  render() {
    return (
      <div>
        {this.state.categories.length > 0 && (
          <Select
            options={this.state.categories.map((item) => ({
              value: item,
              text: item,
            }))}
            onChange={(e) => this.setState({ activeCategory: e.target.value })}
          />
        )}
        <GridItems
          items={this.state.products}
          activeCategory={this.state.activeCategory}
        />
      </div>
    );
  }
}
