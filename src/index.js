import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const el = (
//   <h1>Hello</h1>
// );

root.render(
  <StrictMode>
    <App/>
  </StrictMode> 
);

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root');
// )
