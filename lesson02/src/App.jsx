import "./App.css";
import MyProfile from "./components_v1/Profile";
import Footer from "./components_v2/Footer";
import Header from "./components_v2/Header";
import SPKhuyenMai, { SPBanChay, SPHot } from "./components_v2/Main";
import Main from "./components_v2/Main";
import Controlled from "./components_v3/Controlled";
import Uncontrolled from "./components_v3/Uncontrolled";
import Product from "./components_v4/Product";
import TenSP from "./components_v4/TenSP";
import Props from "./components_v4/Props";

//NOTE: Đây là app của components_v1, chỉ có MyProfile
/*function App() {
  return (
    <>
      <MyProfile />
    </>
  );
} */


//NOTE: Đây là app của components_v2, có Header, Footer và Main với 3 sản phẩm
/*function App() {
  return (
    <>
      <Header></Header>
      
      <SPKhuyenMai></SPKhuyenMai>
      <SPBanChay></SPBanChay>
      <SPHot></SPHot>

      <Footer></Footer>
    </>
  );
} */


function App() {
  return (
    <>
      <div>
        <Controlled></Controlled>
        <Uncontrolled></Uncontrolled>
      </div>

      <div>
        <TenSP></TenSP>
        <Product name="Laptop" />
        <Product name="Chuột" />
      </div>

      <div>
        <Props></Props>
      </div>
    </>
  );
}

export default App;
