import './App.css';
import Cards from './components/Card/Cards.jsx';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Detail from './components/Detail/Detail.js'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.js'

function App () {

  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'parra2089@gmail.com';
  const password = '789jesus';

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
   !access && navigate('/');
  }, [access]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }


  return (
    <div className='App'>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />}

      <Routes>
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='/About' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App;
