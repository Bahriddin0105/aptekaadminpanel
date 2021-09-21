import React, { Component } from "react";
import { Modal, Button, Input } from "antd";
import { Form, Col, Row, Container } from "react-bootstrap";
import {
  InfoCircleOutlined,
  FileImageOutlined,
  PlaySquareOutlined,
  MoneyCollectOutlined,
  SaveOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import "./Login.css";
export default class Dorilar extends Component {
  state = {
    dori:[
      {
        nomi:'analgin',
        malumot:` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy`,
        foto:'https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg',
        video:'https://www.youtube.com/embed/DAZO8eU-T_M',
        kasal:'bosh ogriq',
        saqlan:'2 yil',
        qolan:'salqin havoda',
        tarkibi:` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard `,
        narxi:'11 000 sum'
      },
      {
        nomi:'analgin',
        malumot:` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy`,
        foto:'https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg',
        video:'https://www.youtube.com/embed/DAZO8eU-T_M',
        kasal:'bosh ogriq',
        saqlan:'3 yil',
        qolan:'salqin havoda',
        tarkibi:` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard `,
        narxi:'12 000 sum'
      },
      {
        nomi:'analgin',
        malumot:` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy`,
        foto:'https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg',
        video:'https://www.youtube.com/embed/DAZO8eU-T_M',
        kasal:'bosh ogriq',
        saqlan:'4 yil',
        qolan:'salqin havoda',
        tarkibi:` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard `,
        narxi:'13 000 sum'
      },
      {
        nomi:'analgin',
        malumot:` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy`,
        foto:'https://pharmstd.ru/upload/300spravo4nik_lekarstva/form_181.jpg',
        video:'https://www.youtube.com/embed/DAZO8eU-T_M',
        kasal:'bosh ogriq',
        saqlan:'5 yil',
        qolan:'salqin havoda',
        tarkibi:` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard `,
        narxi:'14 000 sum'
      },
    ],
    loading: false,
    visible: false,
    setIsModalVisible: false,
    nomi:null,
    malumot:null,
    foto:null,
    video:null,
    kasal:null,
    saqlan:null,
    qolan:null,
    narx:null,
    tarkib:null,
    edit:null,
  };

  showModal = () => {
    this.setState({
      visible: true,
      setIsModalVisible: true,
    });
  };
  showModal1 = () => {
    this.setState({
      setIsModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        loading: false,
        visible: false,
        setIsModalVisible: false,
      });
    }, 3000);
  };
  handleOk1 = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        setIsModalVisible: false,
      });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false, setIsModalVisible: false });
  };
  handleCancel1 = () => {
    this.setState({ setIsModalVisible: false });
  };

  render() {
    const { visible, loading, isModalVisible, setIsModalVisible, dori } =
      this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Dorilarni kiritish
        </Button>
        <Container>
          
          {
            dori && Array.isArray(dori)?dori.map((item, key)=>{
             return (
              <Row>
              <h2>{item.nomi.toUpperCase()}</h2>
              <Col xs={12} md={4} sm={4}>
                <img src={item.rasm} />
              </Col>
              <Col xs={12} md={4} sm={4} className="info">
                <p className="kasallik">{item.kasal}</p>
                <p className="malumot">{item.malumot}</p>
                <p className="narx">{item.narxi}</p>
  
                <Button type="primary" style={{width:'100%'}} onClick={this.showModal1}>
                  Full info
                </Button>
                <Modal
                  title="To'liq ma'lumot"
                  visible={setIsModalVisible}
                  onOk={this.handleOk1}
                  onCancel={this.handleCancel1}
                >
                  <p className="saqlanish">
                    <h3>Saqlanishini</h3>
                    {item.saqlan}</p>
                  <p className="qollanish">
                    <h3>Qo'llanilishi</h3>
                    {item.qolan}</p>
                  <p className="tarkibi">
                    <h3>Tarkibi</h3>{item.tarkibi}</p>
                </Modal>
              </Col>
              <Col className="iframe" xs={12} md={4} sm={4}>
                <iframe
                  width="560"
                  height="315"
                  className="iframe"
                  src={item.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
             )
            }):''
          }
        </Container>
        <Modal
          visible={visible}
          title="Dorilarni ma'lumotlarini kiritish"
          onOk={this.handleOk}
          centered
          className="Modal"
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>,
          ]}
        >
          <div
            style={{
              height: "420px",
              overflowX: "hidden",
            }}
          >
            <Form>
              <Row>
                <Col xs={12} md={6} sm={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="zoom">Nomi</Form.Label>
                    <Form.Control
                      style={{ height: "28px" }}
                      type="text"
                      placeholder="Nomini kiriting"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <InfoCircleOutlined
                      className="icons"
                      style={{ color: "rgb(54, 54, 155)" }}
                    />

                    <Form.Label className="zoom">Ma'lumot</Form.Label>
                    <Form.Control
                      style={{ height: "28px" }}
                      type="text"
                      placeholder="Ma'lumot kiriting"
                    />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <FileImageOutlined
                      className="icons"
                      style={{ color: "rgb(54, 54, 155)" }}
                    />
                    <Form.Label className="zoom">Rasmni kiriting</Form.Label>
                    <br />
                    <Form.Control
                      style={{ height: "28px" }}
                      type="file"
                      placeholder="rasmni kiriting"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput"
                  >
                    <PlaySquareOutlined
                      className="icons"
                      style={{ color: "rgb(54, 54, 155)" }}
                    />

                    <Form.Label className="zoom">Video</Form.Label>
                    <Input addonBefore="http://" placeholder="my video" />
                    {/* <Form.Control style={{height:'28px' }} type="text" placeholder="Video" /> */}
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} sm={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <MedicineBoxOutlined
                      className="icons"
                      style={{ color: "rgb(54, 54, 155)" }}
                    />
                    <Form.Label className="zoom">Kasallik</Form.Label>
                    <Form.Control
                      style={{ height: "28px" }}
                      type="text"
                      placeholder="Kasallik turini kiriting"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <SaveOutlined
                      className="icons"
                      style={{ color: "rgb(54, 54, 155)" }}
                    />
                    <Form.Label className="zoom">Saqlanishi</Form.Label>
                    <Form.Control
                      style={{ height: "28px" }}
                      type="text"
                      placeholder="Saqlanishini kiriting"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label className="zoom">Qo'llanish</Form.Label>
                    <Form.Control
                      style={{ height: "28px" }}
                      type="text"
                      placeholder="Qo'llanish usulini kiriting"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput6"
                  >
                    <MoneyCollectOutlined
                      className="icons"
                      style={{ color: "rgb(54, 54, 155)" }}
                    />
                    <Form.Label className="zoom">Narxi</Form.Label>
                    <Form.Control
                      style={{ height: "28px" }}
                      type="number"
                      placeholder="Narxini kiriting"
                    />
                  </Form.Group>
                </Col>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="zoom">Tarkibi</Form.Label>
                  <Form.Control style={{ height: "28px" }} as="textarea" />
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
