import React from 'react';//
import { useAuthContext } from './hooks/useAuthContext';
import { NavBar } from './components/navBar/navBar';
import { ChatForm } from './components/ChatForm/ChatForm';
import { useCollection } from './hooks/useCollection';
import { Chat } from './components/Chat/Chat';
import './App.scss';

export const App = () => {
  const { document } = useCollection('chat-text');
  const { user } = useAuthContext();

  return (
    <div className="App">
      <NavBar />
      {
        user && (
          <>
            <Chat document={document} />
            <ChatForm />
          </>
        )
      }
    </div>
  );
};
