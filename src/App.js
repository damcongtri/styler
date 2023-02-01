import logo from './logo.svg';
import './App.css';
import Header from './customer/layout/header/header';
import 'antd/dist/reset.css';
import Home from './customer/page/home/home';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Shop from './customer/page/shop/shop';
import Btn_x from './component/btn/btn_x';
import Footer from './customer/layout/footer/footer';
import DetailProduct from './customer/page/detail-product/detail_product';
import Cart from './customer/page/cart/cart';
import Checkout from './customer/page/checkout/checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* <Outlet /> */}
      {/* <Home /> */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="detail_product" element={<DetailProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
