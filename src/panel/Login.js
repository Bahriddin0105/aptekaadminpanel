import React, { Component } from "react";
import { Row, Col, Alert, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import fox from "../doctor2.jpg";
import "./Login.css";
export default class RouterA extends Component {
  render() {
    return (
      <div className="bosh">
        <div class="d-flex flex-column justify-content-center w-100 h-100">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div className="asosiy">
              <Row>
                <Col
                  xs={6}
                  style={{
                    padding: "20px",
                    boxSizing: "borderBox",
                    marginTop: "6%",
                  }}
                >
                  <Container>
                    <Container>
                      {" "}
                      <Alert
                        variant={"secondary"}
                        style={{
                          textAlign: "center",
                          borderRadius: "15px",
                          fontSize: "20px",
                        }}
                      >
                        <img
                          className="logotip"
                          src="https://www.logopik.com/wp-content/uploads/edd/2018/09/Medical-Logo-Vector-Free-Download.png"
                        />{" "}
                        Login va parolni kiriting
                      </Alert>
                      <br />
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicLogin">
                          <Form.Label
                            style={{
                              fontFamily: "Century Gothic",
                              fontSize: "22px",
                              fontWeight: "600",
                            }}
                          >
                            Login
                          </Form.Label>
                          <Form.Control
                            className="inp"
                            style={{
                              backgroundColor: "rgba(128, 128, 128, 0.089)",
                              color: "rgba(0, 0, 255, 0.603)",
                              fontSize: "18px",
                              fontFamily: "Century Gothic",
                              border: "0px solid red",
                              borderLeft: "5px solid blue",
                              borderRadius: "0px",
                            }}
                            type="word"
                            placeholder="Enter login"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label
                            style={{
                              fontFamily: "Century Gothic",
                              fontSize: "22px",
                              fontWeight: "600",
                            }}
                          >
                            Parol
                          </Form.Label>
                          <Form.Control
                            className="inp"
                            style={{
                              backgroundColor: "rgba(128, 128, 128, 0.089)",
                              color: "rgba(0, 0, 255, 0.603)",
                              fontSize: "18px",
                              fontFamily: "Century Gothic",
                              border: "0px solid red",
                              borderLeft: "5px solid blue",
                              borderRadius: "0px",
                            }}
                            type="password"
                            placeholder="Enter password"
                          />
                        </Form.Group>
                      </Form>
                      <Link to="/adminpanel">
                        <div className="btna">KIRISH</div>
                      </Link>
                    </Container>
                  </Container>
                </Col>
                <Col xs={6}>
                  <img className="photo" src={fox} />
                </Col>
              </Row>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}
