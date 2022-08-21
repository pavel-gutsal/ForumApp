import React, { useEffect, useRef } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Message } from '../Message/Message';
import { timeStamp } from '../../functions/timeStamp';
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
            document.map((post, index) => {
              let sameUserWithPrevMessage = false;

              const messagePostTime = timeStamp(post.createdAt);
              if (index > 0) {
                if (
                  document[index - 1].userId === post.userId
                  && post.createdAt.seconds - document[index - 1].createdAt.seconds < 300
                ) {
                  sameUserWithPrevMessage = true;
                }
              }
              const myMessage = user.uid === post.userId;

              return (
                <Message
                  key={post.messageId}
                  post={post}
                  myMessage={myMessage}
                  messagePostTime={messagePostTime}
                  sameUserWithPrevMessage={sameUserWithPrevMessage}
                />
              );
            })
          )
        }
        <div ref={scroll} className="scroll" />
      </div>
    </div>
  );
};
