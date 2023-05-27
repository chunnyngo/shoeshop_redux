import React, { Component } from "react";
import { shoeArr } from "./data";
import Listshoe from "./Listshoe";
import Detail from "./Detail";
import Cartshoe from "./Cartshoe";
export default class Ex_shoeshop extends Component {
  state = {
    shoeArr: shoeArr,
    detailshoe: shoeArr[0],
    cart: [],
  };
  handleViewDetail = (shoe) => {
    this.setState({ detailshoe: shoe });
  };
  handleBuy = (shoe) => {
    let clonecart = [...this.state.cart]; // copy cart moi tu cart cu
    let index = clonecart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      let newShoe = { ...shoe, soLuong: 1 }; // copy shoe vao newshoe va them so luong
      clonecart.push(newShoe);
    } else {
      clonecart[index].soLuong++; // update so luong cua object cua clonecart
      // update gi thi vo do
    }
    this.setState({ cart: clonecart }); //update cart cu bang cart moi
  };
  handleDelete = (idShoe) => {
    let cloneCart = this.state.cart.filter((item) => item.id !== idShoe); //filter tao ra mot mang moi tu mang cu => tao mot bien de luu
    this.setState({ cart: cloneCart });
  };
  handleChangeQty = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id == idShoe);
    cloneCart[index].soLuong = cloneCart[index].soLuong + option;
    // so luong co the la +1 or -1
    if (cloneCart[index].soLuong === 0) {
      // sau khi update xong neu soluong =0 thi xoa
      cloneCart.splice(index, 1);
    }
    this.setState({ cart: cloneCart });
  };
  render() {
    return (
      <div>
        <div className="row">
          <Cartshoe
            cart={this.state.cart}
            handleDelete={this.handleDelete}
            handleChangeQty={this.handleChangeQty}
          />
          <Listshoe
            list={this.state.shoeArr}
            handleViewDetail={this.handleViewDetail}
            handleBuy={this.handleBuy}
          />
        </div>
        <Detail detail={this.state.detailshoe} />
      </div>
    );
  }
}
