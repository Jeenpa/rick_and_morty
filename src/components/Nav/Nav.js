import SearchBar from '../Search/SearchBar.jsx';


 function Nav({onSearch}) {

 	return (
		<nav>
			<SearchBar onSearch={onSearch} />
		</nav>
	)

}


export default Nav;