import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Form, FloatingLabel} from "react-bootstrap";
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
          Malumotlarni kiritish
        </Button>
        <Modal
          visible={visible}
          title="Ma'lumotlarini kiritish"
          onOk={this.handleOk}
          centered
          className="Modal"
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
          <div style={{ height: "400px", overflowY: "auto" }}>
          
            <Form>
            
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Label>Video</Form.Label>
                <Form.Control type="text" placeholder="Video" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Manzil</Form.Label>
                <Form.Control type="text" placeholder="Manzilni kiriting" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Telefon raqam</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Telefon raqamni kiriting"
                />
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
                <Form.Control
                  type="email"
                  placeholder="Email manzilingizni kiriting"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Instagram manzil</Form.Label>
                <Form.Control type="text" placeholder="Instagram manzil" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label>Telegram manzil</Form.Label>
                <Form.Control type="text" placeholder="Telegram manzil" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput6"
              >
                <Form.Label>Facebook manzil</Form.Label>
                <Form.Control type="text" placeholder="Facebook manzil" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput7"
              >
                <Form.Label>You tube</Form.Label>
                <Form.Control type="number" placeholder="You tube" />
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
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
