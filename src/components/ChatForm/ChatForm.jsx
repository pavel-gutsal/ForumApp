import React, { useState, useRef } from 'react';
import './ChatForm.scss';
import { useFireStore } from '../../hooks/useFireStore';
import { useAuthContext } from '../../hooks/useAuthContext';

export const ChatForm = () => {
  const [message, setMessage] = useState('');
  const { addMessage } = useFireStore('chat-text');
  const { user } = useAuthContext();
  const divContEdible = useRef(null);

  const submitHandler = () => {
    if (message === '') {
      return;
    }

    addMessage({
      message,
      userId: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    divContEdible.current.innerText = '';
  };

  return (
    <div className="ChatForm">
      <div className="wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          className="ChatForm__form"
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
            }}
            value={message}
          />
          <button
            type="submit"
            className="ChatForm__send"
          >
            <img
              className="ChatForm__sendImg"
              src="./assets/send.svg"
              alt="send"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
