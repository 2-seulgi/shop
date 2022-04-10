import React, { useState } from 'react';
import { useHistory, useParams} from 'react-router-dom';

function Detail(props) {
  let {id} = useParams();
  let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="./img/clothes1.jpg" width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.clothes[0].title}</h4>
          <p>{props.clothes[0].content}</p>
          <p>{props.clothes[0].price}</p>
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
        </div>
      </div>
    </div>
  );
}
export default Detail;
