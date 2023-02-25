import styled from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name, species, gender, image, onClose, id}) {
 
   return (
      <div className={styled.card}>
         
          <button className={styled.close} onClick={onClose}>X</button>

         
            <div>
               <Link to={`/detail/${id}`}>
                  <img className={styled.image} src={image} alt="" />
               </Link>
            </div>
         
          
         <div> 
             <h2>{name}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>      
      </div>
   );
}
