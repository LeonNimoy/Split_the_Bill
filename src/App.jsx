import React from 'react';
import { ToastContainer } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import './App.css';

import Routes from './routes/Routes';

const App = () => (
  <>
    <ToastContainer
      position="top-center"
      pauseOnHover="true"
      autoClose={5000}
    />
    <Routes />
  </>
);

export default App;
