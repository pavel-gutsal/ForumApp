import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import './ChatForm.scss';
import { useFireStore } from '../../hooks/useFireStore';
import { useAuthContext } from '../../hooks/useAuthContext';

export const ChatForm = () => {
  const [message, setMessage] = useState('');
  const [scrollHeight, setScrollHeight] = useState(false);
  const { addMessage } = useFireStore('chat-text');
  const { user } = useAuthContext();
  const divContEdible = useRef(null);

  const submitHandler = () => {
    if (message === '') {
      return;
    }

    const str = message.replace(/\s+/g, ' ').trim();

    if (str === '') {
      return;
    }

    addMessage({
      message: str,
      userId: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    divContEdible.current.innerText = '';
    setMessage('');
    setScrollHeight(false);
  };

  return (
    <div className="ChatForm">
      <div className="wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          className={classNames('ChatForm__form', { roundBorder: scrollHeight })}
        >
          <label
            className="ChatForm__label"
            htmlFor="chat-add-image"
          >
            <img
              className="ChatForm__addImg"
              src="./assets/add.svg"
              alt="add"
            />
            <input
              id="chat-add-image"
              type="file"
              className="ChatForm__file"
              accept="image/*"
            />
          </label>
          <div
            ref={divContEdible}
            contentEditable
            data-placeholder="Type a message..."
            className="ChatForm__textdiv"
            onInput={(e) => {
              setMessage(e.target.innerText);
              if (e.target.scrollHeight > 60) {
                setScrollHeight(true);
                return;
              }
              setScrollHeight(false);
            }}
            value={message}
          />
          <button
            type="submit"
            className={classNames('ChatForm__send', { round: scrollHeight })}
          >
            <img
              className={classNames('ChatForm__sendImg', { roundImg: scrollHeight })}
              src="./assets/send.svg"
              alt="send"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
