import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
export default class Messages extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>F.I.O</th>
              <th>Telefon</th>
              <th>Xabar</th>
              <th>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </th>
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
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  O'qilgan
                </Button>
              </td>
              <td>
                <Button variant="dark" style={{ width: "100%" }}>
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
