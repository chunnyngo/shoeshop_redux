import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    let { name, price, description, quantity, image } = this.props.detail;
    return (
      <div>
        <h2>Detail</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Decriptions</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{price}</td>
              <td>{description}</td>
              <td>{quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
