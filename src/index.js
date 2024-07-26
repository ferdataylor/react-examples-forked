import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import OnChangeExample from './OnChangeExample';
import InputAdornmentExample from './InputAdornmentExample';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <OnChangeExample /> */}
    <InputAdornmentExample />
  </StrictMode>
);
