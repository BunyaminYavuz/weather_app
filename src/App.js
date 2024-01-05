import './App.css';
import Weather from './components/Weather';
import { CityProvider } from './context/City';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CityProvider >
          <Weather />
        </CityProvider>
      </header>
    </div>
  );
}

export default App;
