import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './MainPage.css'
import logo from '../../assets/logo_transparent.png'

export const MainPage = () => {
    return (<>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">ProjectsOrg</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href='/signup'>SignUp</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
        </Navbar>
        <div className="container-mainpage">
            <div className="row justify-content-end align-items-center">
                <div className="col-5" >
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="intro-text">Welcome to ProjectsOrg, this API will definitely make your life easier. It is wellknown that dividing big projects into smaller tasks will improve your productivity, that's the reason of our existance, interested? Please signup ahead.</h1>
                </div>
            </div>
        </div>
    </>
    )
}
