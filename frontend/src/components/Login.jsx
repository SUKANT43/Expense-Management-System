import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const navigate=useNavigate()

const[data,setData]=useState({
  email:"",
  password:""
})


async function handleClick(){
  try{

    const val=await axios.post('http://localhost:2009/api/auth/signIn',data)
    if(val.status===201){
      alert('enter all fields')
    }
    if(val.status===202){
       alert('email is not registred')
    }
    if(val.status===203){
       alert('you entered password is wrong')
    }
    if(val.status===200){
        localStorage.setItem("token",val.data.token)
        alert('login successfully')
        navigate('/home')


    }
  }
  catch(e){
    alert({msg:e.message})
  }
}



  return (
    <div className='mainContainer'>
      <div className='frormContainer'>
        <form onSubmit={handleClick}>
            <div className='emailContainer'>
                <input type='email' placeholder='Email' name="email" value={data.email} onChange={e=>{setData({...data,[e.target.name]:e.target.value})}}/>
            </div>
            <div className='passWordContainer'>
                <input type='password' placeholder='Enter your password' name="password" value={data.password} onChange={e=>{setData({...data,[e.target.name]:e.target.value})}}/>
            </div>
            <div className="button-container">
              <button>Submit</button>
            </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login
