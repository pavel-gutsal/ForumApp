import React, { useRef, useState } from 'react';
import './ChatForm.scss';

export const ChatForm = () => {
  const [message, setMessage] = useState('');
  const form = useRef(null);
  const button = useRef(null);

  const textAreaHandler = (e) => {
    setMessage(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;

    // console.log(e.target.scrollHeight);

    // if (e.target.scrollHeight > 50) {
    //   e.target.style.height = `${e.target.scrollHeight}px`;
    //   e.target.style.top = 0;
    // }

    // if (e.target.scrollHeight < 50) {
    //   // e.target.style.top = `${45 - e.target.scrollHeight}px`;
    //   e.target.style.top = '8px';
    //   form.current.style.bottom = '0';
    // } else if (e.target.scrollHeight > 50 && e.target.scrollHeight < 80) {
    //   e.target.style.top = `${70 - e.target.scrollHeight}px`;
    //   button.current.style.borderRadius = '60px 0 60px 60px';
    //   form.current.style.bottom = '0';
    // } else {
    //   e.target.style.top = 0;
    //   form.current.style.height = 'auto';
    //   form.current.style.bottom = '20px';
    //   button.current.style.borderRadius = '60px';
    // }
  };

  return (
    <div className="ChatForm">
      <div className="wrapper">
        <form
          ref={form}
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
          <textarea
            className="ChatForm__message"
            placeholder="Type a message ..."
            onChange={(e) => {
              textAreaHandler(e);
            }}
            value={message}
          />
          <button
            ref={button}
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
