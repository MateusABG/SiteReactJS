import { useNavigate } from "react-router";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'; 

function Create_account(){
	let navigate=useNavigate(); 
	const checkPassword=(email,pass,pass2)=>{ 
		if(email!=="" ){
			//Registrar email   
			if(pass===pass2 && pass!=="" && pass2!==""){ 
				createUserWithEmailAndPassword(auth,email,pass).then((e)=>{
					console.log(e);
					
					navigate("/login");
				}).catch((error)=>{ 
					alert(error.code+":"+error.message);
				});;
			}else{
				alert("Password not matching or not inputed!->"+pass+"!="+pass2);
			}
		}else{
			alert("Email is not registered");
		}
	}
 
    return(<div>
		<p> Email </p>
		<input id='email' className="textInput" type="email"  placeholder="email@email"/>
		<p> Password </p>
		<input id="pass" className="textInput" type="password"  placeholder="password"/>
		<p> Reenter Password  </p>
		<input id="pass2"  className="textInput" type="password" placeholder="password"/>
		<br/>
		<button className="botao" onClick={(e)=>{
			let email=document.getElementById("email").value;
			let pass=document.getElementById("pass").value;  
			let pass2=document.getElementById("pass2").value;  
			document.getElementById("error").innerHTML=pass2;
			checkPassword(email,pass,pass2);
		}} > Create </button>
		<p id="error"></p>
		</div> );
}
export default Create_account;