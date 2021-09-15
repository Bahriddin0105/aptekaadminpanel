import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
// import logo from "./fox.jpg";
export default class Bosh extends Component {
  render() {
    return (
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://static.norma.uz/images/137855_a9d463eb38b1851294d37f73ed5d.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://static.norma.uz/images/137855_a9d463eb38b1851294d37f73ed5d.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://static.norma.uz/images/137855_a9d463eb38b1851294d37f73ed5d.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
