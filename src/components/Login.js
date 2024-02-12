import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css'
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(auth => {
                if (auth) {
                    console.log(auth)
                    console.alert('User Registered')
                    navigate('/')
                }
            })
            .catch(err => alert(err.message))
    }
    return (
        <div className='login'>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} type='submit' className='login__signInButton'>
                        Sign In
                    </button>
                </form>

                

                <button onClick={register} className='login__registerButton'>
                    Create your Account
                </button>
            </div>
        </div>
    )
}

export default Login