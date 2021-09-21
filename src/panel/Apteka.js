import React, { Component } from "react";
import { Modal, Button, Input, Space } from "antd";
import { Form, Row, Col } from "react-bootstrap";
import { PhoneOutlined, EnvironmentOutlined, MailOutlined, InstagramOutlined, SendOutlined, YoutubeFilled, InfoCircleOutlined } from "@ant-design/icons";
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
          <div>
            <Form>
              <Space direction="vertical">
                <Row>
                  <Col xs={12} md={6} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className='zoom'>Nomi</Form.Label>
                      <Form.Control style={{height:'32px'}} type="text" placeholder="Nomini kiriting" />
                    </Form.Group>
                    <Form.Group>
                    <InfoCircleOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                      <Form.Label className='zoom'>Ma'lumot</Form.Label>
                      <Form.Control style={{height:'32px'}}
                        type="text"
                        placeholder="Ma'lumot kiriting"
                      />
                    </Form.Group>

                    <Form.Group
                    style={{marginTop:'15px'}}
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                       <EnvironmentOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                      <Form.Label className='zoom'>Manzil</Form.Label>
                      <Form.Control style={{height:'32px'}}
                        type="text"
                        placeholder="Manzilni kiriting"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput2"
                    >
                       <PhoneOutlined className='icons' style={{color:'rgb(54, 54, 155)'}}/>
                      <Form.Label className='zoom'>Telefon raqam</Form.Label>
                      {/* <Form.Control style={{height:'32px'}}
                      type="tel"
                      placeholder="Telefon raqamni kiriting"
                    /> */}
                      <Input addonBefore="+998" placeholder="my number" />
                    </Form.Group>
                    {/* <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className='zoom'>Rasmni kiriting</Form.Label>
              <br />
              <Form.Control style={{height:'32px'}} type="file" placeholder="rasmni kiriting" />
            </Form.Group> */}
                  </Col>
                  <Col xs={12} md={6} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput3"
                    >
                  <MailOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                      <Form.Label className='zoom'>Email</Form.Label>
                      {/* <Form.Control style={{height:'32px'}}
                      type="email"
                      placeholder="Email manzilingizni kiriting"
                    /> */}
                      <Input addonBefore="http://" placeholder="my email" />
                    </Form.Group>{" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput4"
                    >
                       <InstagramOutlined className='icons' style={{color:'rgba(212, 36, 154, 0.808)'}} />
                      <Form.Label className='zoom' style={{color:'rgba(212, 36, 154, 0.808)'}}>Instagram manzil</Form.Label>
                      {/* <Form.Control style={{height:'32px'}} type="text" placeholder="Instagram manzil" /> */}
                      <Input
                        addonBefore="http://instagram.com/"
                        placeholder="my instagramm"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput5"
                    >
                      <SendOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                      <Form.Label className='zoom'>Telegram manzil</Form.Label>
                      {/* <Form.Control style={{height:'32px'}} type="text" placeholder="Telegram manzil" /> */}
                      <Input
                        addonBefore="http://t.me/"
                        placeholder="my telegramm"
                      />
                    </Form.Group>
                    {/* <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput6"
                    >
                      <Form.Label className='zoom'>Facebook manzil</Form.Label>
                      
                      <Input
                        addonBefore="http://fb.me"
                        placeholder="my facebook"
                      />
                    </Form.Group> */}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput7"
                    >
                      <YoutubeFilled className='icons' style={{color:'red'}} />
                      <Form.Label className='zoom' style={{color:'red'}}>You tube</Form.Label>
                      {/* <Form.Control style={{height:'32px'}} type="text" placeholder="You tube" /> */}
                      <Input
                        addonBefore="https://youtube.com"
                        placeholder="my you tube"
                      />
                    </Form.Group>
                    {/* <p>Ishni boshlanish kuni</p>
                    <select className="select">
                      <option value="1">Dushanba</option>
                      <option value="2">Seshanba</option>
                      <option value="3">Chorshanba</option>
                      <option value="4">Payshanba</option>
                      <option value="5">Juma</option>
                      <option value="6">Shanba</option>
                    </select>
                    <br />
                    <p>Ishning tugash kuni</p>
                    <select className="select">
                      <option value="1">Dushanba</option>
                      <option value="2">Seshanba</option>
                      <option value="3">Chorshanba</option>
                      <option value="4">Payshanba</option>
                      <option value="5">Juma</option>
                      <option value="6">Shanba</option>
                    </select> */}
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
