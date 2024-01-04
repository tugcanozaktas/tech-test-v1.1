import { useState } from 'react';
import '../styles/App.css';
import Search from './Search';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  return (
    <div className="App">
      <img src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' alt='nasa-logo' className='nasa-logo' />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
