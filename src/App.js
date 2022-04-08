/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Data from './data.js';

function App() {
  let [clothes, clothes변경] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Codishop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <div className="background-content">
          <h1>봄을 담은 옷, 최대 30% 얼리버드 쿠폰 </h1>
          <p>4.1~4.11 역대급 웰컴 페스타</p>
          <Button variant="primary" size="lg">
            Primary button
          </Button>{' '}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {clothes.map((a, i) => {
            return <Card clothes={clothes[i]} i={i} key={i} />;
          })}         
        </div>
      </div>
    </div>
  );
}
function Card(props) {
  return (
    <div>
      <div className="col-md-4">
        <img src={'/img/clothes' + (props.i + 1) + '.jpg'} width="100%" alt="" />
        <h4>{props.clothes.title}</h4>
        <p>
          {props.clothes.content} & {props.clothes.price}
        </p>
      </div>
    </div>
  );
}
export default App;
