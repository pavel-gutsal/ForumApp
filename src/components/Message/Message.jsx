/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import { timeStamp } from '../../functions/timeStamp';
import './Message.scss';

export const Message = ({ post, useruid }) => {
  // eslint-disable-next-line object-curly-newline
  const { photoURL, displayName, message, createdAt, userId } = post;
  const myMessages = useruid === userId;

  const messagePostTime = timeStamp(createdAt);

  return (
    <div
      className={classNames('Message', { isOwn: myMessages })}
    >
      <img
        src={photoURL}
        alt="avatar"
        className="Message__avatar"
      />
      <div className="Message__unit">
        <div
          className={classNames('Message__person-wrapper', { isOwn: myMessages })}
        >
          {
            messagePostTime.length > 1 && (
              <h3 className="Message__person">{messagePostTime[1]}</h3>
            )
          }
          <h3 className="Message__person">{displayName}</h3>
        </div>
        <div
          className={classNames('Message__content', { isOwn: myMessages })}
        >
          <p
            className={classNames('Message__text', { isOwn: myMessages })}
          >
            {message}
          </p>
          <div className="Message__time-container">
            <h3 className="Message__timeStamp">{messagePostTime[0]}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
