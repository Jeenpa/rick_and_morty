import Card from './Card';


 function Cards({characters}) {


   return(

   	<div>
   		{
   			characters.map((character) => {
   				return 	<Card
   					key={character.id}
   					name={character.name}
			        species={character.species}
			        gender={character.gender}
			        image={character.image}
			        onClose={() => window.alert('Emulamos que se cierra la card')} 
			   		/>
   			})
   		}
   	</div>

   	) 

}

export default Cards;
