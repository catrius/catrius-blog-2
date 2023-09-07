import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="py-5 border-top mt-5">
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <p className="text-muted">
              This website is made with ❤️ by Catrius
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
