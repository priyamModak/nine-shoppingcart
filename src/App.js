import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';
import { Col, Container, Row } from 'reactstrap';


function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id;
    }) // Checks if the item.id exist in cartItem, if yes then returns its index

    if(isAlreadyAdded !== -1){
      toast("Already in cart", {type: "error"});
      return;
    }

    setCartItem([...cartItem, item]);
  }

  const buyNow = () => {
    setCartItem([]);
    toast("Ordered Successfully", {type: "success"})
  }

  const removeItemFromCart = item => {
    setCartItem(cartItem.filter(eachItem => (eachItem.id !== item.id)));
    toast("Item removed", {type: "success"})
  }

  return (

    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} buyNow={buyNow} removeItemFromCart={removeItemFromCart}></Cart>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
