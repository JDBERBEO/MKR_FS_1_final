import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { useHistory } from 'react-router'


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem('token'));
console.log('initial state', user)

	const login = (state) => {
    console.log('Desde authcontext', state)

		axios.post('http://localhost:3002/login', state)
			.then((response) => {
        console.log('response', response)
				if (response.data.token) {
					localStorage.setItem('token', response.data.token)

					setUser(response.data.token)
					console.log('user is logged')
				}
			})
			.catch(error => {
				console.log(error)

				// setErrors({ ...errors, response: `UPS! ${error.response.data.error.message}` })
			})

	}


	const logout = (user) => {
		if (user) {
			localStorage.removeItem('token')
		}
	}

	useEffect(() => {
		console.log('Useeffect token')
		if (!user) {
			const token = localStorage.getItem('token');
			console.log('Useeffect get token token', token)
			if (token) {
				console.log('Useeffect hay  token')
				setUser(token)
			}
		}
	}, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
