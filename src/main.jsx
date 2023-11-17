//component imports

import App from './App.jsx';

// css imports
import './index.css'

// library imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <App />
    <Toaster />
    </BrowserRouter>,
  
  
)
