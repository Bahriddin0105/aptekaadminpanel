import React, { Component } from "react";
import { Row, Col, Alert, Container , Form } from "react-bootstrap";
import fox from "./fox.jpg";
import "./Login.css";
export default class RouterA extends Component {
  render() {
    return (
      <div className="bosh">
        <div className="asosiy">
          <Row>
            <Col xs={6} style={{ padding: "20px", boxSizing: "borderBox" }}>
              <Container>
                {" "}
                <Alert variant={"secondary"} style={{ textAlign: "center" }}>
                  Login va parolni kiriting
                </Alert>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="word" placeholder="Enter login" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Parol</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>

                  
                </Form>
              </Container>
            </Col>
            <Col xs={6}>
              <img className="photo" src={fox} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
