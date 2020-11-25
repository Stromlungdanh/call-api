import React, { Component } from "react";
import ProductList from "../../components/ProductList/Productlist";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import { fetchData, removeProduct } from "../../reducers/product";
class ProducListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Nó sẽ được gọi sau khi component render lần đầu tiên
    callApi("products", "GET", null).then((res) => {
      this.props.onFetchData(res.data);
    });
  }

  onDelete = (id) => {
    callApi(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        this.props.onRemoveProduct({ id });
      }
    });
  };

  findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };

  render() {
    const { products } = this.props;

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
        return <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} />;
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchData: (data) => {
      dispatch(fetchData(data));
    },
    onRemoveProduct: (data) => {
      dispatch(removeProduct(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProducListPage);
