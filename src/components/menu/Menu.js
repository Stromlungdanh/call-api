import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản lý sản phẩm",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "nav-item" : "";
        return (
          <li className={active}>
            <Link className="nav-link" to={to}>
              {lable}
            </Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ul className="nav nav-tabs">
            {this.showMenus(menus)}
          </ul>
        </div>
      </div>
    );
  }
  showMenus=(menus)=>{
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu,index)=>{
        return (
          <MenuLink key={index} lable={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
        )
      })
    }
    return result
  }
}

export default Menu;
