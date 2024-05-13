import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
  Col,
} from 'react-bootstrap';
import { data, a } from './data.js';
import { Detail } from './Detail.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [item, setItem] = useState(data);

  return (
    <div className="App">
      <div className="Navbar">
        {[false].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <Navbar.Brand href="#">Mini Shop</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Mini Shop
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
      <Routes>
        <Route
          // 홈 이미지 + 홈이미지 생성 맵
          path="/"
          element={
            <>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/beach.jpg'}
                  className="home-img"
                />
              </div>
              <Container ClassName="home-Kategorie">
                <Row>
                  {item.map(function (a, i) {
                    return <HomeItem item={item[i]} i={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail item={item} />} />
        <Route path="/about" />
      </Routes>
      {/* 정렬 버튼 */}
      <button
        onClick={() => {
          let copy = [...item];
          copy.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
          setItem(copy);
        }}
      >
        정렬
      </button>
    </div>
  );
}

// 메인페이지 아이템 생성 컴포넌트
function HomeItem(props) {
  return (
    <Col>
      <img
        src={
          process.env.PUBLIC_URL +
          'https://codingapple1.github.io/shop/shoes' +
          [props.item.id + 1] +
          '.jpg'
        }
        width="70%"
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </Col>
  );
}

export default App;
