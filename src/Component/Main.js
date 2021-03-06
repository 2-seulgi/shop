import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Data from '../data';
import axios from 'axios';

let 재고context = React.createContext();

function Main() {
  let [clothes, clothes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 21, 8]);

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
        <재고context.Provider value={재고}>
          <div className="row">
            {clothes.map((a, i) => {
              return <Card clothes={clothes[i]} i={i} key={i} />;
            })}
          </div>
        </재고context.Provider>
        <button
          className="btn btn-primary"
          onClick={() => {
            // post 하는법
            axios.post('서버URL', { searchText: '검색어' });
            axios
              .get('https://codingapple1.github.io/shop/data2.json')
              .then((res) => {
                console.log(res.data);
                clothes변경([...clothes, ...res.data]);
              })
              .catch(() => {
                console.log('실패');
              });
          }}
        >
          더보기
        </button>
      </div>
    </div>
  );
}
function Card(props) {
  let 재고 = useContext(재고context);

  return (
    <div className="col-md-4">
      <img src={'/img/clothes' + (props.i + 1) + '.jpg'} width="100%" alt="" />
      <h4>{props.clothes.title}</h4>
      <p>
        {props.clothes.content} & {props.clothes.price}
      </p>
      <Test />
    </div>
  );
}

function Test() {
  let 재고 = useContext(재고context);
  return <p>재고:{재고[0]}</p>;
}
export default Main;
