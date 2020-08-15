import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes/Routes';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        pauseOnHover="true"
        autoClose={5000}
      />
      <Routes />
    </>
  );
}

export default App;
