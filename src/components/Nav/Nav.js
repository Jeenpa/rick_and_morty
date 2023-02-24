import SearchBar from '../Search/SearchBar.jsx';
import styled from './Nav.module.css';
import { Link } from 'react-router-dom';


 function Nav({onSearch}) {

 	return (

		<div className={styled.container}>
			<Link to='about'>About</Link>
			<Link to='home'>Home</Link>
			<SearchBar onSearch={onSearch} />
		</div>
	)

}


export default Nav;