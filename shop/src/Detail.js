import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

function Detail(props) {
  useEffect(() => {
    <div className="alert alert-warning">2초이내 구매시 할인</div>;
  });

  let [discount, setDiscount] = useState(true);
  function discountAlert() {
    return <div className="alert alert-warning">2초이내 구매시 할인</div>;
  }

  let [CreatTab, setTabs] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDiscount(false);
    }, 2000);
  }, []);

  let { id } = useParams();

  return (
    <div className="container">
      {discount == true ? discountAlert() : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' +
              [Number(id) + 1] +
              '.jpg'
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.item[id].title}</h4>
          <p>{props.item[id].content}</p>
          <p>{props.item[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <div className="navTabs"></div>
      <Nav variant="tabs" defaultActiveKey="link-1">
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTabs(0);
            }}
          >
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setTabs(1);
            }}
          >
            후기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            onClick={() => {
              setTabs(2);
            }}
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent CreatTab={CreatTab} />
    </div>
  );
}

function TabContent(props) {
  if (props.CreatTab === 0) {
    return <div>내용1</div>;
  } else if (props.CreatTab === 1) {
    return <div>내용2</div>;
  } else if (props.CreatTab === 2) {
    return <div>내용3</div>;
  }
}

export { Detail };
