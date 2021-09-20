import React, { Component } from "react";
import { Modal, Button, Input } from "antd";
import { Form, Col, Row } from "react-bootstrap";
import { InfoCircleOutlined, FileImageOutlined, PlaySquareOutlined, MoneyCollectOutlined, SaveOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import "./Login.css";
export default class Dorilar extends Component {
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
          Dorilarni kiritish
        </Button>
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
                <Col xs={12} md={6} sm={3}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="zoom">Nomi</Form.Label>
                    <Form.Control style={{height:'28px' }} type="text" placeholder="Nomini kiriting" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <InfoCircleOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />

                    <Form.Label className="zoom">Ma'lumot</Form.Label>
                    <Form.Control style={{height:'28px' }} type="text" placeholder="Ma'lumot kiriting" />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3"><FileImageOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                    <Form.Label className="zoom">Rasmni kiriting</Form.Label>
                    <br />
                    <Form.Control style={{height:'28px' }} type="file" placeholder="rasmni kiriting" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput"
                  >
                      <PlaySquareOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                    
                    <Form.Label className="zoom">Video</Form.Label>
                    <Input addonBefore="http://" placeholder="my video" />
                    {/* <Form.Control style={{height:'28px' }} type="text" placeholder="Video" /> */}
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} sm={3}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <MedicineBoxOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                    <Form.Label className="zoom">Kasallik</Form.Label>
                    <Form.Control style={{height:'28px' }}
                      type="text"
                      placeholder="Kasallik turini kiriting"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <SaveOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                    <Form.Label className="zoom">Saqlanishi</Form.Label>
                    <Form.Control style={{height:'28px' }}
                      type="text"
                      placeholder="Saqlanishini kiriting"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label className="zoom">Qo'llanish</Form.Label>
                    <Form.Control style={{height:'28px' }}
                      type="text"
                      placeholder="Qo'llanish usulini kiriting"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput6"
                  >
                    <MoneyCollectOutlined className='icons' style={{color:'rgb(54, 54, 155)'}} />
                    <Form.Label className="zoom">Narxi</Form.Label>
                    <Form.Control style={{height:'28px' }}
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
                  <Form.Control style={{height:'28px' }} as="textarea" />
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
