import { HashRouter, Route } from 'react-router-dom';
import Header from './header/Header';
import './App.css';
import Numbers from './Numbers';
import Currencies from './Currencies';

const App = () => {
  return (
    <div className="app container">
      <HashRouter>
        <Header />
        <Route path="/" exact component={Numbers} />
        <Route path="/learn/nigeria/notes" exact component={Currencies} />
      </HashRouter>
    </div>
  );
};

export default App;
