import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Data from '../data';

function Main() {
  let [clothes, clothes변경] = useState(Data);

  return (
    <div>
      <div className="background">
        <div className="background-content">
          <h1>봄을 담은 옷, 최대 30% 얼리버드 쿠폰 </h1>
          <p>4.1~4.11 역대급 웰컴 페스타</p>
          <Button variant="light" size="lg">
            Primary button
          </Button>{' '}
        </div>
      </div>{' '}
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
    <div className="col-md-4">
      <img src={'/img/clothes' + (props.i + 1) + '.jpg'} width="100%" alt="" />
      <h4>{props.clothes.title}</h4>
      <p>
        {props.clothes.content} & {props.clothes.price}
      </p>
    </div>
  );
}
export default Main;
