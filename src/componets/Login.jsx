import React, { useState } from 'react'
import "./login.css"
import { useNavigate} from 'react-router-dom'

const Login = () => {
    const [ form , setform ] = useState({ ids : "" , password : "" });
    const navigate = useNavigate()
    const login = async (e) => {
        e.preventDefault();
        try {
            const dataPost  = await fetch("https://mysql-0yei.onrender.com/login" , { 
                method : "POST",
                headers : { "Content-Type": "application/json"},
                body : JSON.stringify(form)
            });
            const response = await dataPost.json();
            if ( response.ids== "customer1" || response.ids == "customer2" ) {
                navigate(`/form/${response.ids}`)
            } else if ( response.ids == "admin" ) {
                navigate("/admin")
            } else {
                alert(response.error)
            }
        } catch (err) {
            alert(err.message)
        }
    }
  return (
    <div className="login_form">
        <input type="text" placeholder='ID' onChange={(e) => setform({...form, ids : e.target.value})} />
        <input type="text" placeholder='Password' onChange={(e) => setform({...form, password : e.target.value})}/>
        <button onClick={login}>SignIn</button>
    </div>
  )
}

export default Login