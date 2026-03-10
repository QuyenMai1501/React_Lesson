import "./App.css";
import Title from "./components/Title";

function showinfoProduct(product) {
  if (product.status) {
    return (
      <h3>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price} VNĐ</p>
        <p>Status: {product.status ? "Active" : "Pending"}</p>
      </h3>
    );
  }
}

function App() {
  var tuoi = 39;
  var name = "Trần Văn Trụi";
  var t = 7,
    l = 9;
  var product = {
    id: 1,
    name: "Iphone 12 Plus",
    price: 150000,
    status: true,
  };

  var users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      age: 18,
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      age: 19,
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      age: 20,
    },
  ];

  var elements = users.map((user, index) => {
    return (
      <div key={user.id}>
        <h3>Tên: {user.name}</h3>
        <h3 className="age">Tuổi: {user.age}</h3>
      </div>
    );
  });

  return (
    <div>
      <Title />
      <div style={{ textAlign: "left", padding: "0 2rem" }}>
        <h2>Tuổi: {tuoi}</h2>
        <h3>Họ tên: {name}</h3>
        <h3>Điểm trung bình: {(t + l) / 2}</h3>
        {showinfoProduct(product)}
        <br />
        {elements}
      </div>
    </div>
  );
}

export default App;
