import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="py-5 border-top mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <p className="text-muted">
              This website is made with ❤️ by Catrius
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
