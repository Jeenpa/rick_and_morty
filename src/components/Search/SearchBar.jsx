import styled from './SearchBar.module.css';
import { useState } from 'react';

 function SearchBar({onSearch}) {

 	const [character, setCharacter] = useState('')

 	const handleChanges = (event) => {
 		setCharacter(event.target.value)
 	}

   return (

    <div className={styled.search}>
      	<input type='search' value={character} onChange={handleChanges} />
     	<button className={styled.agregar} onClick={() => onSearch(character)}>Agregar</button>
    </div>

   );
}


export default SearchBar;