import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/menu/Menu";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Menu */}
          <Menu />
          {/* End Menu */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <button className="btn btn-info mt-3" typeof="button">
                Thêm sản phẩm
              </button>
              <h2 className="mt-3 text-center">DANH SÁCH SẢN PHẨM</h2> */}
                {/* ProductList */}
                {/* <ProductList/> */}
                {/* End ProductList */}
                {this.showContentMenus(routes)}
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
