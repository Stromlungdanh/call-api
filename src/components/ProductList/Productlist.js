import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    return (
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>MÃ</th>
            <th>TÊN</th>
            <th>GIÁ</th>
            <th>TRẠNG THÁI</th>
            <th>HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          {/* ProductItem */}
          {this.props.children}
          {/* End ProductItem */}
        </tbody>
      </table>
    );
  }
}

export default ProductList;
