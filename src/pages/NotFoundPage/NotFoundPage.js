import React,{ Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Không tìm thấy trang 404</h4>
          <p className="mb-0"></p>
        </div>
        
      </div>
    );
  }
}

export default NotFoundPage;
