import styled from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name, species, gender, image, onClose, id}) {
 
   return (
      <div className={styled.card}>
         
         <div>
          <button className={styled.close} onClick={onClose}>X</button>
         <div>

         <Link to={`/detail/${id}`}>
            <div>
            <img className={styled.image} src={image} alt="" />
               <h2>{name}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
            <div>
         </Link>

      </div>
   );
}
