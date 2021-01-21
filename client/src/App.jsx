import './App.css';
import axios from 'axios';

function App() {
console.log("found");
  axios.get('/api/books/1984') .then( (res) => {
    console.log("found a book", res);
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
