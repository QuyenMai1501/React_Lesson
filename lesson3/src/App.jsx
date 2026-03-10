import { Component } from "react";
import "./App.css";
import Product from "./components/Product";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Iphone 14 Pro Max",
          price: 30000000,
          image:
            "https://cdn.tgdd.vn/Products/Images/42/247863/iphone-14-pro-max-den-thumb-600x600.jpg",
          status: true,
        },
        {
          id: 2,
          name: "Samsung galaxy s7",
          price: 15000000,
          image:
            "https://cdn.tgdd.vn/Products/Images/42/247863/iphone-14-pro-max-den-thumb-600x600.jpg",
          status: true,
        },
        {
          id: 3,
          name: "Oppo 11",
          price: 10000000,
          image:
            "https://cdn.tgdd.vn/Products/Images/42/247863/iphone-14-pro-max-den-thumb-600x600.jpg",
          status: true,
        },
        {
          id: 4,
          name: "Oppo 15",
          price: 15000000,
          image:
            "https://cdn.tgdd.vn/Products/Images/42/247863/iphone-14-pro-max-den-thumb-600x600.jpg",
          status: true,
        },
      ],
      isActive: true,
    };

    this.onSetState = this.onSetState.bind(this);
  }

  onSetState() {
    // if (this.state.isActive) {
    //   this.setState({
    //     isActive: false,
    //   });
    // } else {
    //   this.setState({
    //     isActive: true,
    //   });
    // }
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = "";
      if (product.status) {
        result = (
          <tr key={product.id}>
            <td>{index}</td>
            <td>{product.name}</td>
            <td>
              <span className="label label-default">{product.price} VNĐ</span>
            </td>
          </tr>
        );
      }
      return result;
    });

    return (
      <div>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand" href="http://localhost:5173/">
                Title
              </a>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="http://locahost:5173/">Home</a>
                </li>
                <li className="active">
                  <a href="http://locahost:5173/">Link</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>{elements}</tbody>
            </table>
            <button type="button" className="btn btn-warning" onClick={this.onSetState}>
              Active :{this.state.isActive === true ? "true" : "false"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
