import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Form } from "react-bootstrap";
import "./Login.css";
export default class Bosh extends Component {
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
          style={{
            height: "80vh",
            overflowY: "auto",
          }}
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
          <Form style={{ backgroundColor: "transparent" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nomi</Form.Label>
              <Form.Control type="text" placeholder="Nomini kiriting" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ma'lumot</Form.Label>
              <Form.Control type="text" placeholder="Ma'lumot kiriting" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Rasmni kiriting</Form.Label>
              <br />
              <Form.Control type="file" placeholder="rasmni kiriting" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tarkibi</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kasallik</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kasallik turini kiriting"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Saqlanishi</Form.Label>
              <Form.Control type="text" placeholder="Saqlanishini kiriting" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qo'llanish</Form.Label>
              <Form.Control
                type="text"
                placeholder="Qo'llanish usulini kiriting"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Narxi</Form.Label>
              <Form.Control type="text" placeholder="Narxini kiriting" />
            </Form.Group>
          </Form>
        </Modal>
      </div>
    );
  }
}
