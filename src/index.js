import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from  'redux-persist/integration/react';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
     </Router>
  </Provider>,
  document.getElementById('root')
);



reportWebVitals();
