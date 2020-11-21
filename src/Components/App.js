import { HashRouter, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import Header from './header/Header';
import Numbers from './pages/Numbers';
import HomePage from './pages/HomePage';
import Currencies from './pages/Currencies';
import speechSynthesis from '../utils/speechSynthesis';
import sections from '../utils/sections';

const App = () => {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const voices = async () => {
      return new Promise(resolve => {
        const id = setInterval(() => {
          if (!speechSynthesis.getVoices().length <= 0) {
            resolve(speechSynthesis.getVoices());

            clearInterval(id);
          }
        });
      });
    };

    voices().then(setVoices);
  }, []);

  console.log(voices);

  return (
    <div className="app container">
      <HashRouter>
        <Header />
        <Route path="/" exact>
          <HomePage sections={sections} />
        </Route>
        <Route path="/learn/numbers" exact component={Numbers} />
        <Route path="/learn/nigeria/notes" exact component={Currencies} />
      </HashRouter>
    </div>
  );
};

export default App;
