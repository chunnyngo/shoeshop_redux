import React, { Component } from "react";
import { shoeArr } from "./data";
import Listshoe from "./Listshoe";
import Detail from "./Detail";
import Cartshoe from "./Cartshoe";
export default class Ex_shoeshop_redux extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Cartshoe />
          <Listshoe />
        </div>
        <Detail />
      </div>
    );
  }
}
