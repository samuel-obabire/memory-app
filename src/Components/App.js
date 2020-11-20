import { HashRouter, Route } from 'react-router-dom';
import Header from './header/Header';
import './App.css';
import Numbers from './pages/Numbers';
import Currencies from './pages/Currencies';

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
