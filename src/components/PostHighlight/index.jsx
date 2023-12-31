import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHighlightPosts } from '@/actions/apiActions';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import dayjs from '@/vendors/dayjs';
import './style.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

function PostHighlight() {
  const dispatch = useDispatch();
  const highlightPosts = useSelector((state) => state.highlightPosts);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getHighlightPosts());
  }, []);

  return (
    <div className="post-highlight section pt-5 pb-0">
      <Container>
        <Row className="justify-content-center mb-5">
          <h2 className="text-center">{t('home.highlights')}</h2>
        </Row>
        <Carousel showStatus={false} infiniteLoop showThumbs={false} showArrows={false}>
          {highlightPosts.data?.results.map((post) => (
            <Row key={post.slug}>
              <Col className="mb-4 mb-md-0" md={4}>
                <Link to={`/post/${post.slug}`} className="me-md-5">
                  <Image
                    className="object-fit-cover d-block"
                    src={post.thumbnail}
                    alt="thumbnail"
                    rounded
                    fluid
                  />
                </Link>
              </Col>
              <Col md={8} className="align-self-center">
                <div className="mb-3">
                  <Link
                    to={`/category/${post.category.slug}`}
                    className="fw-semibold text-decoration-none text-muted"
                  >
                    {post.category.name}
                  </Link>
                  <span className="text-muted">
                    {` — ${dayjs(post.created_at).format('LL')}`}
                  </span>
                </div>
                <h2>
                  <Link to={`/post/${post.slug}`} className="text-decoration-none text-dark">{post.title}</Link>
                </h2>
                <p className="text-muted">{post.excerpt}</p>
              </Col>
            </Row>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default PostHighlight;
