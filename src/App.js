/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Data from './data.js';
import Detail from './Component/Detail';
import Main from './Component/Main';
import { Link, Route, Switch } from 'react-router-dom';

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
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
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
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/detail/:id">
        <Detail clothes={clothes} />
      </Route>
    </div>
  );
}

export default App;
