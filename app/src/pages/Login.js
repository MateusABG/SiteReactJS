import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth' 
import {auth,provider,emailprovider} from './firebase-config';
import { useNavigate } from 'react-router'; 
import { useState } from 'react';

function Login({setIsAuth}){
    let navigate=useNavigate();
    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((e)=>{
            localStorage.setItem("isAuth",true);   
            localStorage.setItem("nome",e.user.displayName);
            setIsAuth(true);  
            navigate('/');
        });
    }
 
    return(
    <div>
        <p className="titulo">Email</p>
        <input className="textInput" id="email" type="email" placeholder="email@email"/>
        <p className="titulo">Senha</p>
        <input className="textInput" id="pass" type="password" placeholder="password"/>
        <br/>
        <a className="line" onClick={(e)=>{
            navigate('/create_account');
        }}>Don't have an account? Create an account!</a>
        <button className="botao" onClick={
            (e)=>{
                const email=document.getElementById("email").value;
                const pass=document.getElementById("pass").value;
                signInWithEmailAndPassword(auth,email,pass).then(
                    (e)=>{ 
                        
                        localStorage.setItem("isAuth",true);
                        setIsAuth(true);
                        localStorage.setItem("nome",e.user.displayName);
                        navigate("/");
                    }
                ).catch((error)=>{
                    alert(error.message);
                })
            }
        }  >Login</button> 
		<button  to="/main"  className="botao" onClick={signInWithGoogle}>Sign in with Google</button>
        
    </div>
    );
}

export default Login;