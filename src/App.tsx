// app.tsx is basically the root of our app
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Auth } from './pages/auth/auth';
import './App.css';
import { Home } from './pages/home/home';
import { Movie } from './pages/individuals/movies';
import { TvShow } from './pages/individuals/tvshows';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/rated' element={<h1>Rated Pages</h1>} />
          <Route path='/movie/:id' element={ <Movie/>} />
          <Route path='/tvshow/:id' element={ <TvShow/> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App
