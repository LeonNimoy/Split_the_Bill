import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import ClientCalculator from './components/client_calculator';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        pauseOnHover="true"
        autoClose={5000}
      />
      <ClientCalculator />
    </>
  );
}

export default App;
