import styled from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name, species, gender, image, onClose, id}) {
 
   return (
      <div className={styled.card}>

          <div>
          <button className={styled.close} onClick={()=>onClose(id)}>X</button>
          </div>

         
            <div className={styled.contenedorimg}>
               <Link to={`/detail/${id}`}>
                  <img className={styled.image} src={image} alt="" />
               </Link>
            </div>
         
          
         <div className={styled.contenedortexto}> 
            <h2>{name}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>      
      </div>
   );
}
