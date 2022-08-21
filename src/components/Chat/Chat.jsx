import React, { useEffect, useRef } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Message } from '../Message/Message';
import './Chat.scss';

export const Chat = () => {
  const { document } = useCollection('chat-text');
  const { user } = useAuthContext();
  const scroll = useRef(null);

  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }, [document]);

  return (
    <div className="Chat">
      <div className="Chat__wrap">
        {
          document && (
            document.map((post) => {
              return (
                <Message post={post} key={post.messageId} useruid={user.uid} />
              );
            })
          )
        }
        <div ref={scroll} className="scroll" />
      </div>
    </div>
  );
};
