import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './style.scss';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '@/components/Footer/LanguageSelect';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-5 border-top mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center mb-4">
            <a
              href="https://www.facebook.com/catriuspham/"
              target="_blank"
              rel="noreferrer"
              className="social-link text-decoration-none me-1"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://github.com/catrius"
              target="_blank"
              rel="noreferrer"
              className="social-link text-decoration-none me-1"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/catrius-pham/"
              target="_blank"
              rel="noreferrer"
              className="social-link text-decoration-none me-1"
              aria-label="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center mb-4">
            <p className="text-muted">
              {t('footer.description')}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={12} className="text-end mb-4">
            <LanguageSelect />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
