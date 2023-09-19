import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, postComment } from '@/actions/apiActions';
import {
  FAILED, IDLE, LOADING, SUCCEEDED,
} from '@/constants';
import { postCommentSlice } from '@/reducers/apiReducers';

function CommentForm({ postId, postSlug }) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const comment = useSelector((state) => state.comment);
  const commenter = localStorage.getItem('commenter');

  const submitButtonText = {
    [IDLE]: 'Submit',
    [LOADING]: 'Submitting...',
    [SUCCEEDED]: 'Submitted',
    [FAILED]: 'Failed. Submit again.',
  };

  const [formData, setFormData] = useState({
    post: postId,
    commenter,
    content: '',
  });

  const [editMode, setEditMode] = useState(!formData.commenter);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;

    if (form.checkValidity()) {
      localStorage.setItem('commenter', formData.commenter);
      dispatch(postComment(formData));
    }
  };

  const handleEditCommenter = () => {
    if (editMode && formData.commenter) {
      localStorage.setItem('commenter', formData.commenter);
      setEditMode(false);
    } else if (!editMode) {
      setEditMode(true);
    }
  };

  useEffect(() => () => {
    dispatch(postCommentSlice.actions.clear());
  }, []);

  useEffect(() => {
    if (comment.status === SUCCEEDED) {
      dispatch(getComments({ post: postSlug }));
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
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            name="commenter"
            placeholder="Your name"
            onChange={handleInputChange}
            required
            value={formData.commenter}
            disabled={!editMode}
          />
          { (commenter !== null && !editMode) && (
            <Button
              className="d-inline-block"
              variant="secondary"
              type="button"
              onClick={handleEditCommenter}
              disabled={!formData.commenter}
            >
              ✎
            </Button>
          ) }
          <Form.Control.Feedback type="invalid">
            Your name is required.
          </Form.Control.Feedback>
        </InputGroup>
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
          <Button variant="secondary" type="submit">
            {submitButtonText[comment.status]}
          </Button>
        </div>
      </Form>
    </>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.number,
  postSlug: PropTypes.string,
};

CommentForm.defaultProps = {
  postId: null,
  postSlug: null,
};

export default CommentForm;
