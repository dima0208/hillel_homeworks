import React, { Component } from 'react';
import { Grid } from './StoreItems/Grid';
import { CategorySelect } from './StoreItems/CategorySelect';

export class Store extends Component {
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
      .then((json) =>
        this.setState(() => ({
          products: json,
        }))
      );

    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) =>
        this.setState(() => ({
          categories: json,
        }))
      );
  }

  render() {
    return (
      <>
        <CategorySelect
          categories={this.state.categories}
          onSelectChange={(e) =>
            this.setState(() => ({ activeCategory: e.target.value }))
          }
        />
        <Grid
          products={this.state.products}
          activeCategory={this.state.activeCategory}
        />
      </>
    );
  }
}
