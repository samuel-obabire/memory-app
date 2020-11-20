import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './header/Header';
import Numbers from './pages/Numbers';
import Currencies from './pages/Currencies';

const App = () => {
  return (
    <div className="app container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Numbers} />
        <Route path="/learn/nigeria/notes" exact component={Currencies} />
      </BrowserRouter>
    </div>
  );
};

export default App;
