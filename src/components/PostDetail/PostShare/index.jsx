import React from 'react';
import {
  FacebookIcon, FacebookShareButton,
} from 'react-share';
import { POST_PROPTYPES } from '@/constants';

function PostShare({ post }) {
  return (
    <div className="mb-4 pb-4 border-bottom">
      <h4 className="mb-4">Share</h4>
      <FacebookShareButton
        url={`https://catri.us/post/${post.slug}`}
        quote={`${post.title} - ${post.excerpt}`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}

PostShare.propTypes = {
  post: POST_PROPTYPES,
};

PostShare.defaultProps = {
  post: {},
};

export default PostShare;
