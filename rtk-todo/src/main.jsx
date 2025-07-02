import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './Store.js';
import { HashRouter } from 'react-router-dom'; // ✅ Add this line

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <HashRouter> {/* ✅ Wrap App inside this */}
        <App />
      </HashRouter>
    </StrictMode>
  </Provider>
);
