import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';


const HomePage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Image
                src="path-to-your-profile-pic.jpg"
                alt="Profile Pic"
                roundedCircle
                className="profile-pic"
              />
              <p>Your bio goes here...</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          {/* Empty column for spacing */}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <a href="placeholder-link-1">
            <Card className="clickable-box">
              {/* Use inline style or CSS classes for background images */}
              <Card.Img
                src="../public/myweekpic.png"
                alt="Box 1"
                className="box-image"
              />
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="placeholder-link-2">
            <Card className="clickable-box">
              {/* Use inline style or CSS classes for background images */}
              <Card.Img
                src="placeholder-background-2.jpg"
                alt="Box 2"
                className="box-image"
              />
            </Card>
          </a>
        </Col>
        <Col md={4}>
          <a href="placeholder-link-3">
            <Card className="clickable-box">
              {/* Use inline style or CSS classes for background images */}
              <Card.Img
                src="placeholder-background-3.jpg"
                alt="Box 3"
                className="box-image"
              />
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;