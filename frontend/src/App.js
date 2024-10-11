import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useState } from "react"

function App() {
const navigate=useNavigate()
  const[user,Setuser]=useState("")
  const[pass,Setpass]=useState("")

  function handleUser(event){
Setuser(event.target.value)
  }

  function handlePass(event){
    Setpass(event.target.value)
  }
function check(){
  let logindetails=axios.post(`http://localhost:5000/login`,{"username":user,"password":pass})
  logindetails.then(function(data){
    if(data.data===true)
    {
      navigate("/success")

    }
    else{
      navigate("/fail")
    }
  })
}
  return (
    <div>
      <input onChange={handleUser} placeholder="username" name="username"/>
      <input onChange={handlePass} placeholder="password" name="password"/>
      <button onClick={check}>Login</button>
   
    </div>
  );
}

export default App;
