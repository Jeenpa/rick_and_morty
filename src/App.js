import './App.css';
import Cards from './components/Card/Cards.jsx';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Detail from './components/Detail/Detail.js'
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Form from './components/Form/Form.js'

function App () {

  const [characters, setCharacters] = useState([]);
  const location = useLocation();

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
    <div className='App' style={{ padding: "25px" }}>
      {location.pathname === '/' ? <Form /> : <Nav onSearch={onSearch} />}

      <Routes>
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='/About' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App;
