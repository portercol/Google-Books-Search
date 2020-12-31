import './App.css';
import axios from 'axios';

function App() {
console.log("found");
  axios.get('/api/books/1984') .then( (res) => {
    console.log("found a book", res);
  })

  return (
    <div className="App">
      <h1>HELOOOOOOOO</h1>
    </div>
  );
}

export default App;
