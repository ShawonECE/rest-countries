import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail';
import NoMatch from './components/NotFound/NoMatch';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:countryName' element={<CountryDetail/>}/>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
