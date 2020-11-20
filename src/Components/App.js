import { MemoryRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './header/Header';
import Numbers from './pages/Numbers';
import Currencies from './pages/Currencies';
import { useEffect, useState } from 'react';
import speechSynthesis from '../utils/speechSynthesis';

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
      <MemoryRouter>
        <Header />
        <Route path="/" exact component={Numbers} />
        <Route path="/learn/nigeria/notes" exact component={Currencies} />
      </MemoryRouter>
    </div>
  );
};

export default App;
