//component imports

import { Provider } from 'react-redux';
import App from './App.jsx';

// css imports
import './index.css'

// library imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <BrowserRouter>

  
      <App />
      <Toaster />
    </BrowserRouter>

  </Provider>

  
  
)
