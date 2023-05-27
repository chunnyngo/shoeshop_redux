import React, { Component } from "react";

export default class Cartshoe extends Component {
  render() {
    let { cart, handleDelete, handleChangeQty } = this.props;
    return (
      <div className="col-6">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price * item.soLuong}</td>
                  <td>
                    <img style={{ width: 50 }} src={item.image} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleChangeQty(item.id, 1);
                      }}
                      className="mr-1 btn btn-success"
                    >
                      +
                    </button>
                    <strong>{item.soLuong}</strong>
                    <button
                      onClick={() => {
                        handleChangeQty(item.id, -1);
                      }}
                      className="ml-1 btn btn-warning"
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
