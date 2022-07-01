import { Provider } from 'react-redux'
import store from './store'
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Exercício React-Redux</h1>
        <div className='linha'>
          <Intervalo></Intervalo>
        </div>
        <div className='linha'>
          <Media></Media>
          <Soma></Soma>
          <Sorteio></Sorteio>
        </div>
      </div>
    </Provider>
  );
}

export default App;
