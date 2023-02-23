import Card from './Card.jsx';
import styled from './Card.module.css'


 function Cards({characters, onClose}) {

   return(

   	<div className={styled.contenedor}>
   		{
   			characters.map((character) => {
   				return 	<Card
   				  key={character.id}
   				  name={character.name}
			        species={character.species}
			        gender={character.gender}
			        image={character.image}
			        onClose={() => onClose(character.id)} 
			   		/>
   			})
   		}
   	</div>

   	) 

}

export default Cards;
