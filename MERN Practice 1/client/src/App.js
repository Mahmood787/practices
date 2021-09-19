
import {BrowserRouter, Route} from 'react-router-dom'
import Register from './pages/Register';
import Signin from './pages/signin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/register" component={Register} />
        <Route path="/signin" component={Signin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
