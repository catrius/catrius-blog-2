import React, { useEffect } from 'react';

function FacebookChat() {
  const initFacebookChat = () => {
    const fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('facebook-jssdk')) return;
    const js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  };

  useEffect(() => {
    const chatbox = document.getElementById('fb-customer-chat');
    chatbox?.setAttribute('page_id', '144932015361970');
    chatbox?.setAttribute('attribution', 'biz_inbox');

    initFacebookChat();

    window.fbAsyncInit = () => {
      // eslint-disable-next-line no-undef
      FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };
  }, []);

  return (
    <>
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
    </>
  );
}

export default FacebookChat;
