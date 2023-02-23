import styled from './Card.module.css';

export default function Card({name, species, gender, image, onClose}) {
 
   return (
      <div className={styled.card}>
         
         <button className={styled.close} onClick={onClose}>X</button>
         <img className={styled.image} src={image} alt="" />
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>

      </div>
   );

}
