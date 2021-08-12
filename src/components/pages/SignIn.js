// // import React, { Component } from 'react';
// // import '../../App.css';

// import React,{useState,useEffect} from 'react'


// import { useHistory } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";



// function EmpLogin(){
//     const [empEmail,setEmail]=useState("");
//     const [empPass,setPassword]=useState("");

// const history =useHistory();
// useEffect(()=>{
//     if (localStorage.getItem('user-info')){
//         // history.push("/EmpLogin")
//     }
// },[])
//  function emplogin(){
//     console.warn("data",empEmail,empPass)
//     let item={empEmail,empPass}
//     let result= fetch('http://localhost:8084/emplogin',{
//         method:'POST',
//         headers:{
//             "Content-Type":"application/json",
//             "Accept":"*/*"
//         },
//         body:JSON.stringify(item)
//     });
//     // result= result.json();
//     // localStorage.setItem('user-info',JSON.stringify(result));
//     // history.push("/EmpLogin")
 

// }
// return(

// <div>
// {/* <div className="col-sm-6 offset-sm-3">
// <h1>Login Page</h1>
// <input type="text" className="form-control" placeholder="email"
// onChange={(e)=>setEmail(e.target.value)}/>
// <br></br>
// <input type="password" className="form-control" placeholder="password"
// onChange={(e)=>setPassword(e.target.value)}/>
// <br></br>
// <button onClick={login} className="btn btn-primary">Login</button>
// </div> */}



// <div className="container">
//         <div className="row">
//             <div className="col-sm-4">
//             </div>
//             <div className="card col-sm-4 my-5">
//                 <div className="card-body">
// <form className="needs-validation">
//                          <div className="form-group">
//                              <label>Employer Log in</label><br></br>
//                             <label htmlFor="uname">Email</label>
//                             <input type="text" className="form-control" id="uname" placeholder="Enter Email" name="uname" onChange={(e)=>setEmail(e.target.value)} required />
//                             <div className="valid-feedback">Valid.</div>
//                             <div className="invalid-feedback">Please fill out this field.</div>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="pwd">Password</label>
//                             <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={(e)=>setPassword(e.target.value)} required />
//                             <div className="valid-feedback">Valid.</div>
//                             <div className="invalid-feedback">Please fill out this field.</div>
//                         </div>
//                         <div className="form-group form-check"> 
//                             <label className="form-check-label">
//                                 <input className="form-check-input" type="checkbox" name="remember" required /> Remember me
//                                 <div className="valid-feedback">Valid.</div>
//                                 <div className="invalid-feedback">Check this checkbox to continue.</div>
//                             </label>
//                         </div>
//                         <button type="submit" className="btn btn-primary" onClick={emplogin}>Login</button>
//                         </form>
//                         <p>Create a new account </p><Link className="nav-link" to="/EmpRegister">sign up</Link>
//                         </div>
//                         </div>
//                         </div>
//                         </div>

// </div>


// )


// }

// export default EmpLogin;