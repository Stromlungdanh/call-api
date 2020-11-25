import React, { Component } from "react";
import ProductList from "../../components/ProductList/Productlist";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";

import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
class ProducListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    // Nó sẽ được gọi sau khi component render lần đầu tiên
    callApi("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  onDelete = (id) => {
    var { products } = this.state;
    callApi(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        var index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products,
          });
        }
      }
    });
  };
  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };
  render() {
    var { products } = this.state;

    // var { products } = this.props;

    return (
      <div>
        <Link to="product/add" className="btn btn-info mt-3" typeof="button">
          Thêm sản phẩm
        </Link>
        <h2 className="mt-3 text-center">DANH SÁCH SẢN PHẨM</h2>
        {/* ProductList */}
        <ProductList>{this.showProducts(products)}</ProductList>
        {/* End ProductList */}
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }

    return result;
  };
}

const mapStateToProps = (state) => {
  // Chuyển cái dữ liệu thành cái props
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProducListPage);
