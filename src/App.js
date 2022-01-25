import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Movies from "./components/movies";
import Counters from "./components/counters";

function App() {
  return (
      <main className="container">
          <Counters />
      </main>
  );
}

export default App;
