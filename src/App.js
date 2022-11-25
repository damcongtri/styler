import logo from './logo.svg';
import './App.scss';
import Header from './customer/layout/header/header';
import 'antd/dist/reset.css';
import Home from './customer/page/home/home';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Shop from './customer/page/shop/shop';
import Btn_x from './component/btn/btn_x';
function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* <Outlet /> */}
      {/* <Home /> */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
