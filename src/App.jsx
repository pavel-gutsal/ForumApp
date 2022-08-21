import React from 'react';//
import { useAuthContext } from './hooks/useAuthContext';
import { NavBar } from './components/navBar/navBar';
import { ChatForm } from './components/ChatForm/ChatForm';
import { Chat } from './components/Chat/Chat';
import './App.scss';

export const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <NavBar />
      {
        user && (
          <>
            <Chat />
            <ChatForm />
          </>
        )
      }
    </div>
  );
};
