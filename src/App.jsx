import React from 'react';//
import { useAuthContext } from './hooks/useAuthContext';
import { NavBar } from './components/navBar/navBar';
import { ChatForm } from './components/ChatForm/ChatForm';
import './App.scss';

export const App = () => {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <div className="App">
      <NavBar />
      Hello
      <ChatForm />
    </div>
  );
};
