import React from 'react';
import {
  FacebookIcon, FacebookShareButton,
} from 'react-share';
import { POST_PROPTYPES } from '@/constants';
import { useTranslation } from 'react-i18next';

function PostShare({ post }) {
  const { t } = useTranslation();

  return (
    <div className="mb-4 pb-4 border-bottom">
      <h4 className="mb-4">{t('post.share')}</h4>
      <FacebookShareButton
        url={`https://catri.us/post/${post.slug}`}
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
