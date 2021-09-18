import React, { Component } from "react";
import { Card } from "antd";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlusCircleOutlined } from "@ant-design/icons";
export default class Apteka extends Component {
  state = {
    dorilar: [
      {
        id: 1,
        nomi: "Analgin",
        rasm: "https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg",
        info: `Bosh og'rig'iga qarshi dori.`,
        narxi: "10 000 sum",
      },
      {
        id: 2,
        nomi: "Analgin",
        rasm: "https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg",
        info: `Bosh og'rig'iga qarshi dori.`,
        narxi: "10 000 sum",
      },
      {
        id: 3,
        nomi: "Analgin",
        rasm: "https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg",
        info: `Bosh og'rig'iga qarshi dori.`,
        narxi: "10 000 sum",
      },
      {
        id: 4,
        nomi: "Analgin",
        rasm: "https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg",
        info: `Bosh og'rig'iga qarshi dori.`,
        narxi: "10 000 sum",
      },
      {
        id: 5,
        nomi: "Analgin",
        rasm: "https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg",
        info: `Bosh og'rig'iga qarshi dori.`,
        narxi: "10 000 sum",
      },
    ],
    // dorilar:[],
    isVisibleModal: false,
    nomi: null,
    info: null,
    narxi: null,
    edit: null,
    show: false,
  };
  openModal = () => {
    this.setState({ isVisibleModal: true });
  };
  handleClose = () => {
    document.getElementById("formBasicNomi").value = "";
    document.getElementById("formBasicNarxi").value = "";
    document.getElementById("formBasicInfo").value = "";
    this.setState({ isVisibleModal: false });
  };

  deleteDori = (id) => {
    var dorilar = this.state.dorilar;
    dorilar.splice(id, 1);
    console.log(id);
    this.setState({
      dorilar: dorilar,
    });
  };
  editDori = (id) => {
    var dorilar = this.state.dorilar;
    var dorilar = {
      nomi: this.state.nomi,
      info: this.state.info,
      narxi: this.state.narxi,
    };

    this.setState({
      yangi: dorilar,
      edit: id,
    });

    this.openModal();
  };
  saveDori = () => {
    var nomi = document.getElementById("formBasicNomi").value;
    var narxi = document.getElementById("formBasicNarxi").value;
    var info = document.getElementById("formBasicInfo").value;
    // var rasm = document.getElementById("formFile").value;
    // var photo = rasm.split("\\");
    // var a = photo.length - 1;
    // console.log(photo[a]);
    var yangi = {
      id: this.state.dorilar.length + 1,
      nomi: nomi,
      info: info,
      narxi: narxi,
      // rasm: photo[a],
    };
    var dorilar = this.state.dorilar;

    if (this.state.edit == null) {
      dorilar.push(yangi);
    } else {
      dorilar[this.state.edit] = yangi;
      this.setState({
        yangi: [],
        edit: null,
      });
    }

    this.setState({
      dorilar: dorilar,
    });
    this.handleClose();
  };

  render() {
    const { isVisibleModal, dorilar } = this.state;
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
              <Modal.Title>Farmasevtika</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicNomi">
                  <Form.Label>Dori nomi</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.dorilar["nomi"]}
                    onChange={(e) => this.setState({ nomi: e.target.value })}
                    placeholder="Dori nomi"
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Rasmni kiriting</Form.Label>
                  <br />
                  <Form.Control type="file" placeholder="rasmni kiriting" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicInfo">
                  <Form.Label>Dori haqida ma'lumot</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.dorilar["info"]}
                    onChange={(e) => this.setState({ info: e.target.value })}
                    placeholder="Ma'lumot"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNarxi">
                  <Form.Label>Narx</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.dorilar["narxi"]}
                    onChange={(e) => this.setState({ narxi: e.target.value })}
                    placeholder="Narxini tiriting"
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
          {dorilar && Array.isArray(dorilar)
            ? dorilar.map((item, key) => {
                return (
                  <Col xs={4}>
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
                      <h3>{item.nomi}</h3>
                      <span>{item.info}</span>
                      <h5>{item.narxi}</h5>
                    </Card>
                  </Col>
                );
              })
            : ""}
          <Col xs={4} style={{ height: "300px" }}>
            <PlusCircleOutlined
              style={{ color: "grey" }}
              className="plus"
              onClick={this.openModal}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
