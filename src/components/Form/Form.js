import React from 'react';
import { useState } from 'react';
import validar from './Validation.js'

function Form(){

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

	return(

		<form>
			<label htmlFor='username'>Username</label>
			<input type='text' onChange={handleInputChange} name='username' value={userData.username} />
			{errors.username && <p style={{color: 'red'}}>{errors.username}</p>}

			<label htmlFor='password'>Password</label>
			<input type='password' onChange={handleInputChange} name='password' value={userData.password} />
			{errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

			<button>LOGIN</button>
		</form>
	
	)

}

export default Form;