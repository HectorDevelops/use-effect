import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchEngine from './components/SearchEngine';
import People from './components/People';
import Planet from './components/Planets';


function App() {
  // include API data [starwars] starst as en empty array/object 
  return (
    <div className="App">
      <SearchEngine/>
      <Routes>
        <Route path="/people/:id" element={ <People /> }> </Route>
        <Route path="/planets/:id" element={ <Planet /> }> </Route>
      </Routes>

    </div>
  );
}

export default App;
