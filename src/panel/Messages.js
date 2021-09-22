import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import "./Login.css";
// import { Form } from "react-bootstrap";
export default class Messages extends Component {
  state = {
    visible: false,
  };

  Yangixabarlar = () => {
    document.getElementById("yangixabarlar").style.display = "table";

    document.getElementById("oqilganlar").style.display = "none";
  };
  Oqilganlar = () => {
    document.getElementById("oqilganlar").style.display = "table";
    document.getElementById("yangixabarlar").style.display = "none";
  };
  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={this.Yangixabarlar}
          style={{ margin: "5px" }}
        >
          Yangi xabarlar
        </Button>
        <Button
          type="primary"
          onClick={this.Oqilganlar}
          style={{ margin: "5px" }}
        >
          O'qilganlar
        </Button>
        <Table striped bordered hover variant="light" id="yangixabarlar">
          <thead>
            <tr>
              <th colSpan="7" className="yangixabaryozuv">
                Yangi xabarlar
              </th>
            </tr>
            <tr>
              <th>#</th>
              <th>F.I.O </th>
              <th>Telefon</th>
              <th>Xabar</th>
              <th>Vaqt</th>
              <th>O'qildi</th>
              <th>O'chirish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kevin Mccallister</td>
              <td>+998917727727</td>
              <td>Bayraming bilan megajin</td>
              <td>
                {/* <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="date" />
                </Form.Group> */}
              </td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>
              <td>
                <Button variant="success" style={{ width: "100%" }}>
                  O'qildi
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table
          striped
          bordered
          hover
          variant="light"
          id="oqilganlar"
          style={{ display: "none" }}
        >
          <thead>
            <tr>
              <th colSpan="6">O'qilganlar</th>
            </tr>
            <tr>
              <th>#</th>
              <th>F.I.O</th>
              <th>Telefon</th>
              <th>Xabar</th>
              <th>Vaqt</th>
              <th>O'chirish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kevin Mccallister</td>
              <td>+998917727727</td>
              <td>Bayraming bilan megajin</td>
              <td>
                {/* <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="date" />
                </Form.Group> */}
              </td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td></td>

              <td>
                <Button variant="danger" style={{ width: "100%" }}>
                  O'chirish
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
