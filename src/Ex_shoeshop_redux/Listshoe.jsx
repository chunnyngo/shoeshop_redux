import React, { Component } from "react";
import Itemshoe from "./Itemshoe";
import { connect } from "react-redux";

class Listshoe extends Component {
  renderListShoe = () => {
    return this.props.listshoe.map((item, index) => {
      return (
        <Itemshoe
          key={index}
          data={item}
          // handleViewDetail={this.props.handleViewDetail}
          handleBuy={this.props.handleBuy}
        />
      );
    });
  };
  render() {
    return <div className="row col-6">{this.renderListShoe()}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    listshoe: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps, null)(Listshoe);
