import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import { addProduct, editProduct } from "../../reducers/product";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    // Đổ dữ liệu ra để chỉnh sửa
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi(`products/${id}`, "GET", null).then((res) => {
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status,
        });
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    var { id } = this.state;
    var { history } = this.props;
    if (id) {
      callApi(`products/${id}`, "PUT", {
        name: this.state.txtName,
        price: this.state.txtPrice,
        status: this.state.chkbStatus,
      }).then((res) => {
        this.props.onEditProduct({
          id,
          name: this.state.txtName,
          price: this.state.txtPrice,
          status: this.state.chkbStatus,
        });
        history.goBack();
      });
    } else {
      callApi("products", "POST", {
        name: this.state.txtName,
        price: this.state.txtPrice,
        status: this.state.chkbStatus,
      }).then((res) => {
        this.props.onAddProduct({
          id,
          name: this.state.txtName,
          price: this.state.txtPrice,
          status: this.state.chkbStatus,
        });
        history.goBack();
      });
    }
  };

  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Link to="/product-list" className="btn btn-danger">
          Trở lại
        </Link>
        {/* Tên sản phẩm */}
        <div className="form-group">
          <label>Tên sản phẩm : </label>
          <input
            type="text"
            className="form-control-file"
            placeholder="Tên sản phẩm"
            name="txtName"
            value={txtName}
            onChange={this.onChange}
          />
        </div>
        {/* Giá */}
        <div className="form-group">
          <label>Giá : </label>
          <input
            type="number"
            className="form-control-file"
            placeholder="Giá sản phẩm"
            name="txtPrice"
            value={txtPrice}
            onChange={this.onChange}
          />
        </div>
        {/*  */}
        <div className="form-group">
          <label>Trạng thái : </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name="chkbStatus"
              value={chkbStatus}
              onChange={this.onChange}
              checked={chkbStatus}
            />
            Còn hàng
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Lưu lại
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddProduct: (data) => {
      dispatch(addProduct(data));
    },
    onEditProduct: (data) => {
      dispatch(editProduct(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductActionPage);
