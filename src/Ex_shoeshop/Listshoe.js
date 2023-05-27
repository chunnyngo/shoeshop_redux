import React, { Component } from "react";
import Itemshoe from "./Itemshoe";

export default class Listshoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item, index) => {
      return (
        <Itemshoe
          key={index}
          data={item}
          handleViewDetail={this.props.handleViewDetail}
          handleBuy={this.props.handleBuy}
        />
      );
    });
  };
  render() {
    return <div className="row col-6">{this.renderListShoe()}</div>;
  }
}
