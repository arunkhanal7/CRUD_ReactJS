import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Empcreate = () => {
const[id,setId]=useState('');
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[phone,setPhone]=useState('');
const[active,setActive]=useState(true);
const navigate= useNavigate();
const handlesubmit = (e)=>{
  e.preventDefault();
  const empdata={id,name,email,phone,active}
  



fetch("http://localhost:8000/employee",{
  method:"POST",
    headers:{'content-type':"application/json"},
   body:JSON.stringify(empdata)
}).then((res)=>res.json())
.then((json)=>{
  alert('Saved Successfully')
  navigate("/")
})
}




  return (
    <form className="container " onSubmit={handlesubmit} >
      <div className="card">
        <div className="card-title">
          <h1> Employee Record </h1>
        </div>
        <div className="card-body">
          <div className="col-lg-12">
            <div className="form-group">
              <label>ID</label>
              <input value={id} disabled="disabled" className="form-control"></input>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Name</label>
              <input value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control"></input>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Email</label>
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control"></input>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Mobile</label>
              <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} className="form-control"></input>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-check">
              <input checked={active} onChange={(e)=>{setName(e.target.checked)}} type="checkbox" className="form-check-input"></input>
              <label className="form-check-label">Is Active</label>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-check">
              <button className="btn btn-success" type="submit">
                Save
              </button>
              <Link to="/" className="btn btn-danger">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Empcreate;
