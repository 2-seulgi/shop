import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Data from './data.js';

function App() {
  let [data, data변경] = useState(Data);
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
          <div className="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg" width="100%" alt="" />
          </div>
          <div className="col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2020/04/22/06/47/hydrangea-5076212_960_720.jpg"
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2021/07/26/14/31/woman-6494471_960_720.jpg" width="100%" alt="" />
      <h4>{props.data[0].title}</h4>
      <p>{props.data[0].content}</p>
    </div>
  );
}
export default App;
