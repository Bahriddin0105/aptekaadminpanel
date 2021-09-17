import React, { Component } from "react";
import { Card } from "antd";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlusCircleOutlined } from "@ant-design/icons";
export default class Card1 extends Component {
  state = {
    
    malumot:[],
    isVisibleModal: false,
    manzil: null,
    telnomeri: null,
    email: null,
    edit: null,
    show: false,
  };
  openModal = () => {
    this.setState({ isVisibleModal: true });
  };
  handleClose = () => {
    document.getElementById("formBasicmanzil").value = "";
    document.getElementById("formBasicemail").value = "";
    document.getElementById("formBasictelnomeri").value = "";
    this.setState({ isVisibleModal: false });
  };

  deleteDori = (id) => {
    var malumot = this.state.malumot;
    malumot.splice(id, 1);
    console.log(id);
    this.setState({
      malumot: malumot,
    });
  };
  editDori = (id) => {
    var malumot = this.state.malumot;
    var malumot = {
      manzil: this.state.manzil,
      telnomeri: this.state.telnomeri,
      email: this.state.email,
    };

    this.setState({
      yangi: malumot,
      edit: id,
    });

    this.openModal();
  };
  saveDori = () => {
    var manzil = document.getElementById("formBasicmanzil").value;
    var email = document.getElementById("formBasicemail").value;
    var telnomeri = document.getElementById("formBasictelnomeri").value;
    // var rasm = document.getElementById("formFile").value;
    
    var yangi = {
      id: this.state.malumot.length + 1,
      manzil: manzil,
      telnomeri: telnomeri,
      email: email,
    };
    var malumot = this.state.malumot;

    if (this.state.edit == null) {
      malumot.push(yangi);
    } else {
      malumot[this.state.edit] = yangi;
      this.setState({
        yangi: [],
        edit: null,
      });
    }

    this.setState({
      malumot: malumot,
    });
    this.handleClose();
  };

  render() {
    const { isVisibleModal, malumot } = this.state;
    const { Meta } = Card;
    return (
      <div>
        <Row>
          
          <br />
          <br />
          <br />
          <br />
          <Modal
            show={isVisibleModal}
            className="xxx"
            onHide={this.handleClose}
          >
            <Modal.Header>
              <Modal.Title>Malumotlaringizni to'ldiring</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicmanzil">
                  <Form.Label>Manzil</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.malumot["manzil"]}
                    onChange={(e) => this.setState({ manzil: e.target.value })}
                    placeholder="Manzil"
                  />
                </Form.Group>
                {/* <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Telefon Nomer</Form.Label>
                  <br />
                  <Form.Control type="tel" placeholder="Phono number" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasictelnomeri">
                  <Form.Label>Telefon Nomer</Form.Label>
                  <Form.Control
                    type="tel"
                    value={this.state.malumot["telnomeri"]}
                    onChange={(e) => this.setState({ telnomeri: e.target.value })}
                    placeholder="Phone number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicemail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={this.state.malumot["email"]}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    placeholder="Emailni tiriting"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.saveDori}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {malumot && Array.isArray(malumot)
            ? malumot.map((item, key) => {
                return (
                  <Col  xs={4}>
                    <Card
                      style={{
                        width: 300,
                        margin: "auto",
                        marginBottom: "20px",
                      }}
                      cover={<img alt="example" src={item.rasm} />}
                      className="cards"
                      actions={[
                        <EditOutlined
                          onClick={() => {
                            this.editDori(key);
                          }}
                          className="iconbtn"
                          key="edit"
                        />,
                        <DeleteOutlined
                          onClick={() => {
                            this.deleteDori(key);
                          }}
                          className="iconbtn colorred"
                          key="delete"
                        />,
                      ]}
                    >
                      <h3>{item.manzil}</h3>
                      <span>{item.telnomeri}</span>
                      <h5>{item.email}</h5>
                    </Card>
                  </Col>
                );
              })
            : ""}
          <Col  xs={4} style={{height: '300px'}}>
            <PlusCircleOutlined style={{color:'grey'}} className='plus' onClick={this.openModal} />
          </Col>
        </Row>
      </div>
    );
  }
}
