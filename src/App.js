import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <>
      {/* <SignInForm/> */}
      <SignUpForm/>
    </>
  );
}

export default App;
