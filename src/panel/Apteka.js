import React, { Component } from "react";
import { Modal, Button, Input, Select, Space, Cascader } from "antd";
import { Form, Row, Col } from "react-bootstrap";
import { VideoCameraAddOutlined, PhoneOutlined } from "@ant-design/icons";
// import { MdEmail } from "react-icons/md";
import "./Login.css";
export default class Apteka extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Apteka ma'lumotlarini
        </Button>
        <Modal
          visible={visible}
          title="Ma'lumotlarini kiritish"
          onOk={this.handleOk}
          centered
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
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
          <div style={{ height: "400px" }}>
            <Form>
              <Space direction="vertical">
                <Row>
                  <Col xs={12} md={6} sm={3}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Nomi</Form.Label>
                      <Form.Control type="text" placeholder="Nomini kiriting" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Ma'lumot</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ma'lumot kiriting"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Manzil</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Manzilni kiriting"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput2"
                    >
                      <PhoneOutlined /> <span></span>{" "}
                      <Form.Label>Telefon raqam</Form.Label>
                      {/* <Form.Control
                      type="tel"
                      placeholder="Telefon raqamni kiriting"
                    /> */}
                      <Input addonBefore="+998" placeholder="my number" />
                    </Form.Group>
                    {/* <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Rasmni kiriting</Form.Label>
              <br />
              <Form.Control type="file" placeholder="rasmni kiriting" />
            </Form.Group> */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput3"
                    >
                      <Form.Label>Email</Form.Label>
                      {/* <Form.Control
                      type="email"
                      placeholder="Email manzilingizni kiriting"
                    /> */}
                      <Input addonBefore="http://" placeholder="my email" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput4"
                    >
                      <Form.Label>Instagram manzil</Form.Label>
                      {/* <Form.Control type="text" placeholder="Instagram manzil" /> */}
                      <Input
                        addonBefore="http://instagram.com/"
                        placeholder="my instagramm"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} sm={3}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput5"
                    >
                      <Form.Label>Telegram manzil</Form.Label>
                      {/* <Form.Control type="text" placeholder="Telegram manzil" /> */}
                      <Input
                        addonBefore="http://t.me/"
                        placeholder="my telegramm"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput6"
                    >
                      <Form.Label>Facebook manzil</Form.Label>
                      {/* <Form.Control type="text" placeholder="Facebook manzil" /> */}
                      <Input
                        addonBefore="http://fb.me"
                        placeholder="my facebook"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput7"
                    >
                      <Form.Label>You tube</Form.Label>
                      {/* <Form.Control type="text" placeholder="You tube" /> */}
                      <Input
                        addonBefore="https://youtube.com"
                        placeholder="my you tube"
                      />
                    </Form.Group>
                    <p>Ishni boshlanish kuni</p>
                    <select className="select" aria-selected="Dushanba">
                      <option value="1">Dushanba</option>
                      <option value="2">Seshanba</option>
                      <option value="3">Chorshanba</option>
                      <option value="4">Payshanba</option>
                      <option value="5">Juma</option>
                      <option value="6">Shanba</option>
                    </select>
                    <br />
                    <p>Ishning tugash kuni</p>
                    <select className="select" aria-selected="Dushanba">
                      <option value="1">Dushanba</option>
                      <option value="2">Seshanba</option>
                      <option value="3">Chorshanba</option>
                      <option value="4">Payshanba</option>
                      <option value="5">Juma</option>
                      <option value="6">Shanba</option>
                    </select>
                  </Col>
                </Row>{" "}
              </Space>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
