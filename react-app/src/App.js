import './App.css';
import Provinces from './components/Provinces';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <img alt="Canada's Flag" width={125} src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" />
      <h2>Canada's Provinces</h2>
      <Provinces />
    </div>
  );
}

export default App;
