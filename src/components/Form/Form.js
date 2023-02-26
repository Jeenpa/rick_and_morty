import React from 'react';
import { useState } from 'react';
import validar from './Validation.js'
import styled from './Form.module.css'

function Form({login}){

	const [userData, setUserData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		username: '',
		password: '',
	});

	const handleInputChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value
		})

		setErrors(validar({
			...userData,
			[event.target.name]: event.target.value
		}))

	} 

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
	}

	return(

		<form onSubmit={handleSubmit}>

			<div className={styled.contenedor}>

				<h3>Ingrese sus datos para acceder a la aplicación</h3>
				<label htmlFor='username'>Nombre de usuario:</label>
				<input type='text' onChange={handleInputChange} name='username' value={userData.username} />
				{errors.username && <p style={{color: 'red'}}>{errors.username}</p>}

				<label htmlFor='password'>Contraseña:</label>
				<input type='password' onChange={handleInputChange} name='password' value={userData.password} />
				{errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

				<button>Iniciar sesión</button>
			</div>
		</form>
	
	)

}

export default Form;