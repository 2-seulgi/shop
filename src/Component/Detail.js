import React, { useState } from 'react';
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

      <div className="row">
        <div className="col-md-6 mt-3">
          <img src="/img/clothes1.jpg" width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
          <div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
