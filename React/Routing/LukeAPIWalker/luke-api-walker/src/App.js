import './App.css';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Results from './components/Results';


function App() {
  return (
    <div className="">
        <SearchBar />
        <Routes>
          <Route exact path="/" element={<div></div>} />
          <Route path="/:category/:id" element={<Results />} />
        </Routes>
    </div>
  );
}

export default App;
