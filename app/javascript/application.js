// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './redux/configureStore';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
