import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Checkout from "./components/Checkout"
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import ProductDetail from "./components/ProductDetail";
import PrivacyPolicy from "./components/Legal_Contact/PrivacyPolicy";
import RefundPolicy from "./components/Legal_Contact/RefundPolicy";
import IndianMangoes from "./components/IndianMangoes";
import About from "./components/Legal_Contact/About";
import Contact from "./components/Legal_Contact/Contact";
import WholesaleForm from "./components/WholesaleForm";
import Category from "./components/Category";
import WhatsappRedirect from "./components/WhatsappRedirect";
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(user)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch, user]);
return (
  
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Layout><Checkout/></Layout>} />
        <Route path="/payment" element={<Layout><Payment/></Layout>}/>
        <Route path='/orders' element={<Layout><Orders/></Layout>} />
        <Route path="/category/nfoods" element={<Layout><Category category="naturalfoods" imagePath={require('./images/jaggery/Jaggery_Image.webp')} /></Layout>}/>
        <Route path="/category/cpo" element={<Layout><Category category="cpo" imagePath={require('./images/cold_pressed_oils/main1.jpg')} /></Layout>}/>
        <Route path="/category/sp" element={<Layout><Category category="sp" imagePath={require('./images/spirulina/main1.jpg')} /></Layout>}/>
        <Route path="/category/fertilizers" element={<Layout><Category category="fertilizers" imagePath={require('./images/turmeric/fert.jpg')} /></Layout>}/>
        <Route path="/about" element={<Layout><About/></Layout>}/>
        <Route path="/contact-us" element={<Layout><Contact/></Layout>}/>
        <Route path="/product/:id" element={<Layout><ProductDetail/></Layout>}/>
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy/></Layout>}/>
        <Route path="/refund-policy" element={<Layout><RefundPolicy/></Layout>}/>
        <Route path="/category/indian-mangoes" element={<Layout><IndianMangoes/></Layout>}/>
        <Route path="wholesale" element={<Layout><WholesaleForm/></Layout>}/>
        <Route path="/whatsapp" element={<Layout><WhatsappRedirect/></Layout>}/>
      </Routes>
    </Router>
  </div>
);
}
export default App;