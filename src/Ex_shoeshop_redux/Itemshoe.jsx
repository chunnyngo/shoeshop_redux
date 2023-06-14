import React, { Component } from "react";
import { connect } from "react-redux";
import { BUY, VIEWDETAIL } from "./redux/const/shoeConst";
import { buyAction, viewDetailAction } from "./redux/action/shoeAction";

class Itemshoe extends Component {
  render() {
    let { data, handleViewDetail, handleBuy } = this.props;
    let { image, name } = data;
    return (
      <div className="col-3 p-4 ">
        <div className="card text-left h-100 border border-danger">
          <img className="card-img-top" src={image} alt />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              return handleViewDetail(data);
            }}
          >
            view details
          </button>
          <button
            onClick={() => {
              return handleBuy(data);
            }}
            className="btn btn-secondary"
          >
            Buy
          </button>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleViewDetail: (shoe) => {
      dispatch(viewDetailAction(shoe));
    },
    handleBuy: (shoe) => {
      dispatch(buyAction(shoe));
    },
  };
};
export default connect(null, mapDispatchToProps)(Itemshoe);
