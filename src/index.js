import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox'
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </BrowserRouter>,
  rootElement
);

