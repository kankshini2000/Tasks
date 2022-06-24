import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8882/saveUser", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
           window.location='/homepage'
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => window.location='/register'}>Register</div>
            <img
            className="home__image"
            src="https://i.pinimg.com/originals/a4/d5/8c/a4d58cf4d21b7bdb7fe01aced89d614e.png"
            alt="bg"
            />
        </div>
    )
}

export default Login
