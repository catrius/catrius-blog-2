import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, postComment } from '@/actions/apiActions';
import {
  FAILED, IDLE, LOADING, SUCCEEDED,
} from '@/constants';
import { postCommentSlice } from '@/reducers/apiReducers';
import { useTranslation } from 'react-i18next';

function CommentForm({ postId, postSlug }) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const comment = useSelector((state) => state.comment);
  const commenter = localStorage.getItem('commenter');
  const { t } = useTranslation();

  const submitButtonText = {
    [IDLE]: t('post.comment.submit.submit'),
    [LOADING]: t('post.comment.submit.submitting'),
    [SUCCEEDED]: t('post.comment.submit.submitted'),
    [FAILED]: t('post.comment.submit.failed'),
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
      <h4 className="mb-4">{t('post.comment.thanks')}</h4>
    );
  }

  return (
    <>
      <h4 className="mb-4">{t('post.comment.title')}</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            name="commenter"
            placeholder={t('post.comment.namePlaceholder')}
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
            {t('post.comment.error.nameRequired')}
          </Form.Control.Feedback>
        </InputGroup>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            name="content"
            rows={6}
            placeholder={t('post.comment.commentPlaceholder')}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t('post.comment.error.commentRequired')}
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
