import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  fond-size=25px;
  color : ${(props) => props.color}
`;

function Detail(props) {
  
  let [알람, 알람창변경] = useState(true);
  useEffect(() => {
    let 타이머 = setTimeout(() => {
      알람창변경(false);
    }, 2000);
  });
  let { id } = useParams();
  let 찾은상품 = props.clothes.find(function (상품) {
    return 상품.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>{' '}
      </박스>
      {알람 === true ? (
        <div className="my-alert mb-3">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src="/img/clothes1.jpg" width="100%" alt="" />
        </div>
        <div className="col-md-6 py-5">
          <h4>{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <Info 재고={props.재고} />

          <button
            className="btn btn-danger mb-3"
            onClick={() => {
              props.재고변경([9, 20, 7]);
            }}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );

  function Info(props) {
    return <p>재고:{props.재고[id]}</p>;
  }
}
export default Detail;
