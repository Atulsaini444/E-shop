import React,{useState} from 'react';
import './Login.css';
import swal from 'sweetalert';

async function loginUser(credentials) {
  return fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login() {
  const [username,setName] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    })
    if ('token' in response) {
      swal("Success", "You are logged in", "success", {
        buttons: false,
        timer: 2000,
      })
      .then(() =>{
        localStorage.setItem('token', response['token']);
      window.location.href = "/productListing";
      })
      
    }else {
      swal("Failed", "Incorrect Details", "error");
    }
  }

  return <>
    <div className='container'>
      <div className='formWrap'>
        <h1>Login Page</h1>
        <input  className='input' type="text" required placeholder='Username' onChange={(e) => setName(e.target.value)}></input>
        <input className='input' required type="password" placeholder='password'
         onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={handleSubmit} className='submit'>Submit</button>
      </div>
    </div>
  </>
}

export default Login;
