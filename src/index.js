import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';

import './index.scss';
import 'tachyons/css/tachyons.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

render(
  <Fragment>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
    />
  </Fragment>,
  document.getElementById('root')
);
