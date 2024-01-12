import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const Signup = () => {
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""}) 
  let history = useHistory();

  const handleSubmit=async(e)=>{
      e.preventDefault();
      const {name,email,password} = credentials;
      const response = await  fetch("http://localhost:5000/api/auth/createuser",
      {

          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body: JSON.stringify({name,email,password}),
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
          //Save the authtoken and redirect
          localStorage.setItem('token',json.authToken);
          localStorage.setItem('name',json.name);
          history.push("/");
      }
      else{
          alert("invalid credentials");
      }
  }
  const onChange = (e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value});
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlhtmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name"onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlhtmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlhtmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlhtmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
          </div>
          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
