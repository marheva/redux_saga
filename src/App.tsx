import React from 'react';
import Shop from './modules/Shop/Shop';
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Shop />
      </div>
    </Provider>

  );
}

export default App;
