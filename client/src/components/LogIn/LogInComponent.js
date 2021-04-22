import React, {useState, useEffect, useContext} from 'react'
import  axios from 'axios'
import {validateLogin} from '../utils/validateLogin'
import {AuthContext} from '../../context/AuthContext' 
import { useHistory } from 'react-router'
import './LogInComponent.css'
import logo from '../../assets/logo.png'

export const LogInComponent = () => {

    const history = useHistory()
    const initialState = {email:'', password: ''}
    const [state, setstate] = useState(initialState)
    const [erros, setErros] = useState({})
    const [isSubmiting, setisSubmiting] = useState(false)
    const {login, user} = useContext(AuthContext)
    
    const handleOnchange =(e)=>{
        const{name,value}=e.target
        setstate({...state,[name]:value})
    }
    console.log(state)    

    const handleOnClick = (e) => {
        e.preventDefault()
        setErros(validateLogin(state))
        setisSubmiting(true)        
    }

    
    const submitLogin = () => {
        console.log('this is state: ', state)
        login(state)
        history.push('/projects')
        
    }

    useEffect(() => {
        if(Object.keys(erros).length === 0 && isSubmiting === true) {
            submitLogin()
        }
     },[erros, isSubmiting])

    useEffect(() => {
        if (user) {
			history.push('/projects');
		}
    }, []) 
    
    return (
         <div className="container-login">
             <div className="row justify-content-center">
                 <div className="cols-4">
                    <form className="login-form">
                        <div className="mb-3">
                            <img src={logo} alt="logo" className="logo-login"/>
                            <h1 className="login-header">LOGIN</h1>
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnchange} value={state.email} name="email"/>
                            <div id="emailHelp" className="form-text"> {erros.response && <p className="alert alert-danger">{erros.response}</p>} </div>
                            <div id="emailHelp" className="form-text"> {erros.email && <p className="alert alert-danger">{erros.email}</p>} </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleOnchange} value={state.password} name="password"/>
                            <div id="emailHelp" className="form-text"> {erros.password && <p className="alert alert-danger">{erros.password}</p>} </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
                    </form>
                 </div>
             </div>
        </div>
    )
}