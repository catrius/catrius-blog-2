// API statuses
import PropTypes from 'prop-types';

export const IDLE = 'idle';
export const LOADING = 'loading';
export const SUCCEEDED = 'succeeded';
export const FAILED = 'failed';

// Pagination
export const PAGE_SIZE = 12;

// Patterns
export const HOME = '/';
export const POST = '/post/:slug';
export const CATEGORY = '/category/:slug';
export const PAGE = '/page/:slug';

// Prop types
export const COMMENT_PROPTYPES = PropTypes.shape({
  id: PropTypes.number,
  commenter: PropTypes.string,
  content: PropTypes.string,
  updated_at: PropTypes.string,
});

export const POST_PROPTYPES = PropTypes.shape({
  title: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
  created_at: PropTypes.string,
  content: PropTypes.string,
});
