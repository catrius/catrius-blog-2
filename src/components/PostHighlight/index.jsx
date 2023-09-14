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

function PostHighlight() {
  const dispatch = useDispatch();
  const highlightPosts = useSelector((state) => state.highlightPosts);

  useEffect(() => {
    dispatch(getHighlightPosts());
  }, []);

  return (
    <div className="post-highlight section pt-5 pb-0">
      <Container>
        <Row className="justify-content-center mb-5">
          <h2 className="col-lg-7 text-center">Highlights</h2>
        </Row>
        <Carousel showStatus={false} autoPlay infiniteLoop>
          {highlightPosts.data?.results.map((post) => (
            <Row>
              <Col lg={12}>
                <div className="d-lg-flex">
                  <div className="me-lg-5 thumbnail mb-4 mb-lg-0">
                    <Link to={`/post/${post.slug}`}>
                      <Image src={post.thumbnail} fluid />
                    </Link>
                  </div>
                  <div className="align-self-center">
                    <div className="mb-3">
                      <span className="fw-semibold">{post.category}</span>
                      {' '}
                      <span className="text-muted">
                        {`— ${dayjs(post.created_at).format('LL')}`}
                      </span>
                    </div>
                    <h2>
                      <Link to={`/post/${post.slug}`} className="text-decoration-none text-dark">{post.title}</Link>
                    </h2>
                    <p className="text-muted">{post.excerpt}</p>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default PostHighlight;
