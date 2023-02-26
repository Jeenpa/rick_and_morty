import SearchBar from '../Search/SearchBar.jsx';
import styled from './Nav.module.css';
import { NavLink } from 'react-router-dom';


 function Nav({onSearch}) {

 	return (

 		

		<div className={styled.containernav}>
			<div className={styled.containertitulo}>
				<h3>Rick and Morty</h3>
			</div>

			<div className={styled.containermenu}>
			<button>
			<NavLink to='/home'>Inicio</NavLink>
			<NavLink to='/about'>Acerca de</NavLink>
			<NavLink to=''>Cerrar sesión</NavLink>
			</button>
			</div>


			<SearchBar onSearch={onSearch} />

		</div>
	)

}


export default Nav;