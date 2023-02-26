import React from 'react';
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import styled from './Detail.module.css'

function Detail () {

	const {detailId} = useParams();

	const [character, setCharacter] = useState({});

	useEffect(() => {
	  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
	    .then((response) => response.json())
	    .then((char) => {
	      if (char.name) {
	        setCharacter(char);
	      } else {
	        window.alert("No hay personajes con ese ID");
	      }
	    })
	    .catch((err) => {
	      window.alert("No hay personajes con ese ID");
	    });
	  return setCharacter({});
	}, [detailId]);



	return(

		//colocaMasDetallesSobreCadaCarta
		<div className={styled.container}>

			<button>
				<NavLink to='/home'>VOLVER</NavLink>
			</button>
			
			<div className={styled.containercard}>
				<img src={character?.image} alt={character.name} />
				<div className={styled.containerdetalle}>
					<p>Nombre: {character?.name}</p>
					<p>Estado: {character?.status}</p>
					<p>Especie: {character?.species}</p>
					<p>Genero: {character?.gender}</p>
					<p>Origen: {character?.origin?.name}</p>
				</div>
			</div>
		</div>
	)

}

export default Detail;