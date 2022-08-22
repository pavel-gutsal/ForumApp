import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ChatForm.scss';
import { useFireStore } from '../../hooks/useFireStore';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useStorage } from '../../hooks/useStorage';

export const ChatForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [scrollHeight, setScrollHeight] = useState(false);
  const { addMessage } = useFireStore('chat-text');
  const { user } = useAuthContext();
  const divContEdible = useRef(null);
  const { uploadImage, progress, imageUrl } = useStorage();

  console.log(progress);

  const submitHandler = () => {
    if (message === '') {
      return;
    }

    const str = message.replace(/\s+/g, ' ').trim();

    if (str === '') {
      return;
    }

    addMessage({
      containsImage: false,
      imageURL: null,
      message: str,
      userId: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    divContEdible.current.innerText = '';
    setMessage('');
    setScrollHeight(false);
  };

  useEffect(() => {
    if (file) {
      uploadImage(file);
      console.log(progress);
    }
  }, [file]);

  useEffect(() => {
    if (file && progress === 100) {
      setFile(null);
    }
  }, [progress]);

  useEffect(() => {
    if (imageUrl) {
      addMessage({
        containsImage: true,
        imageURL: imageUrl,
        message: null,
        userId: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    }
  }, [imageUrl]);

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
          { file && (
            <div style={{ width: 50, height: 50 }} className="ChatForm__ProgressBar">
              <CircularProgressbar
                value={progress}
                maxValue={1}
                strokeWidth={14}
                styles={buildStyles({
                  pathColor: 'rgb(252, 220, 126)',
                  strokeLinecap: 'butt',
                })}
              />
            </div>
          )}
          {
            !file && (
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
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </label>
            )
          }
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
