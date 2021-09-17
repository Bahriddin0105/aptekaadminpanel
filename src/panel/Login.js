import React, { Component } from "react";
import { Row, Col, Alert, Container , Form ,Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import fox from "./fox.jpg";
import "../Login.css";
export default class RouterA extends Component {
  render() {
    return (
      <div className="bosh">
        <div className="asosiy">
          <Row>
            <Col xs={6} style={{ padding: "20px", boxSizing: "borderBox", marginTop: '8%' }}>
              <Container>
                <Container>
                {" "}
                
                
                
                
                
                
                <Alert variant={"secondary"} style={{ textAlign: "center", borderRadius:'15px' }}>
                  Login va parolni kiriting
                </Alert><br/>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label>Login</Form.Label>
                    <Form.Control className='inp' style={{borderRadius:'15px'}} type="word" placeholder="Enter login" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Parol</Form.Label>
                    <Form.Control className='inp' style={{borderRadius:'15px'}} type="password" placeholder="Enter password" />
                  </Form.Group>

                  
                </Form>








                <Link to='/adminpanel/bosh'><Button variant="primary" className='btn' style={{width: '100%', marginTop: '20px', borderRadius:'15px'}}>KIRISH</Button></Link>






                </Container>
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
