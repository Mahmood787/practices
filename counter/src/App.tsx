import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
