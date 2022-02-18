import logo from './logo.svg';
import './App.css';    
import {BrowserRouter as Router,Link,Route,Routes,Redirect} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Create_account from './pages/Create_account';
import EditPost from './pages/EditPost';
import { useState } from 'react'; 
import {auth,provider} from './pages/firebase-config';

function App() {
  var [isAuth,setIsAuth]=useState(false);
   const signOff=()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname='/login';
  }; 
  return (    
      <Router>
      <nav>
        {console.log(isAuth+"->"+isAuth)}
        {!isAuth ? 
          <Link className="ButtonLogin" to="/login">Login</Link>
          : 
          <div className="Username">Oi,{localStorage.getItem("nome")}! <button onClick={signOff}> Sign Off</button></div>
           }
      </nav>
        <Routes> 
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/create_account" element={<Create_account/>}/>
        <Route path="/create_post" element={<CreatePost/>}/>
        <Route path="/edit_post" element={<EditPost/>}/>
        </Routes>
      </Router> 
  );
}

export default App;
