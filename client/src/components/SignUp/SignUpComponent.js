import React, {useState, useEffect} from 'react'
import  axios from 'axios'
import {validate} from '../utils/validate'
import './SignUpComponent.css'
import signuppic from '../../assets/signuppic.jpg'



export const SignUpComponent = ({history}) => {

    const initialState = {email:'', password: '', password2:''}
    const [state, setstate] = useState(initialState)
    const [erros, setErros] = useState({})
    const [isSubmiting, setisSubmiting] = useState(false)
    

    const handleOnchange =(e)=>{
        const{name,value}=e.target
        setstate({...state,[name]:value})
    }
    console.log(state)    

    const handleOnClick = (e) => {
        e.preventDefault()
        setErros(validate(state))
        setisSubmiting(true)
    }

    useEffect(() => {
       if(Object.keys(erros).length === 0 && isSubmiting === true) {
           submitForm()
       }
    },[erros, isSubmiting])


    const submitForm = () => {
        axios.post('http://localhost:3002/signup', state)
        .then((response) => {
            console.log(response.data.token);
            localStorage.setItem('token',response.data.token)
            history.replace('/login')

        })
        .catch(error => {

            setErros({ ...erros, response: error.response.data.error.message});
         
        });
        
    } 
    return (
        <div className="containersignp">
            <div className="row justify-content-between">
            <div className="col-4" id="signup-div">
                <form className="signup-form">
                    <div className="mb-3">
                        <h1>SIGNUP</h1>
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnchange} value={state.email} name="email"/>
                        <div id="emailHelp" className="form-text"> {erros.response && <p className="alert alert-danger">{erros.response}</p>} </div>
                        <div id="emailHelp" className="form-text"> {erros.email && <p className="alert alert-danger">{erros.email}</p>} </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleOnchange} value={state.password} name="password"/>
                        <div id="emailHelp" className="form-text"> {erros.password && <p className="alert alert-danger">{erros.password}</p>} </div>
                        <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" onChange={handleOnchange} value={state.password2} name="password2"/>
                        <div id="emailHelp" className="form-text"> {erros.password2 && <p className="alert alert-danger">{erros.password2}</p>} </div>
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={handleOnClick}>Submit</button>
                </form>
            </div>
            <div classname="col-8">
                <img src={signuppic} alt="signuppic" className="signuppic"/>
            </div>
            </div>
        </div>
    )
}
