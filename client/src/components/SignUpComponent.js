import React, {useState} from 'react'
import  axios from 'axios'



export const SignUpComponent = () => {

    const initialState = {email:'', password: ''}
    const [state, setstate] = useState(initialState)
    
    const handleOnchange =(e)=>{
        const{name,value}=e.target
        setstate({...state,[name]:value})
    }
    console.log(state)    

    const handleOnClick = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/signup', state)
        .then((response) => {
            console.log(response.data.token);
            localStorage.setItem('token',response.data.token)
        }, (error) => {
            console.log(error);
        });

    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <h1>SIGNUP</h1>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnchange} value={state.email} name="email"/>
                    <div id="emailHelp" className="form-text"> We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleOnchange} value={state.password} name="password"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
            </form>
        </div>
    )
}
