import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, postComment } from '@/actions/apiActions';
import {
  FAILED, IDLE, LOADING, SUCCEEDED,
} from '@/constants';
import { postCommentSlice } from '@/reducers/apiReducers';
import { useParams } from 'react-router-dom';

function CommentForm({ postId }) {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [validated, setValidated] = useState(false);
  const comment = useSelector((state) => state.comment);
  const submitButtonText = {
    [IDLE]: 'Submit',
    [LOADING]: 'Submitting...',
    [SUCCEEDED]: 'Submitted',
    [FAILED]: 'Failed. Submit again.',
  };

  const [formData, setFormData] = useState({
    post: postId,
    commenter: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;

    if (form.checkValidity()) {
      dispatch(postComment(formData));
    }
  };

  useEffect(() => () => {
    dispatch(postCommentSlice.actions.clear());
  }, []);

  useEffect(() => {
    if (comment.status === SUCCEEDED) {
      dispatch(getPost(slug));
    }
  }, [comment.status]);

  if (comment.status === SUCCEEDED) {
    return (
      <h4 className="mb-4">Thanks for your comment!</h4>
    );
  }

  return (
    <>
      <h4 className="mb-4">Leave a comment</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="commenter"
            placeholder="Your name"
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Your name is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            name="content"
            rows={6}
            placeholder="Type in your comment"
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Comment cannot be empty.
          </Form.Control.Feedback>
        </Form.Group>
        <div className="text-end">
          <Button variant="primary" type="submit">
            {submitButtonText[comment.status]}
          </Button>
        </div>
      </Form>
    </>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.number,
};

CommentForm.defaultProps = {
  postId: null,
};

export default CommentForm;