import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom';


const Empedit = () => {
  const { empid } = useParams();

//const [empdata, empdatachange] = useState({});


useEffect(() => {
  fetch("http://localhost:8000/employee/" + empid).then((res) => {
      return res.json();
  }).then((resp) => {
      setId(resp.id);
      setName(resp.name);
      setEmail(resp.email);
      setPhone(resp.phone);
      setActive(resp.isactive);
  }).catch((err) => {
      console.log(err.message);
  })
}, []);

const[id,setId]=useState('');
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[phone,setPhone]=useState('');
const[active,setActive]=useState(true);


const navigate= useNavigate();


const handlesubmit = (e)=>{
e.preventDefault();
const empdata={id,name,email,phone,active}




fetch("http://localhost:8000/employee/"+empid,{
method:"PUT",
headers:{'content-type':"application/json"},
body:JSON.stringify(empdata)
}).then((res)=>{
alert('Saved Successfully')
navigate("/")
}).catch((err)=>{
console.log(err.message);
})
}

  return (
    <>
    <form className="container " onSubmit={handlesubmit} >
<div className="card">
  <div className="card-title">
    <h1> Employee Edit </h1>
  </div>
  <div className="card-body">
    <div className="col-lg-12">
      <div className="form-group">
        <label>ID</label>
        <input value={id} readOnly className="form-control"></input>
      </div>
    </div>

    <div className="col-lg-12">
      <div className="form-group">
        <label>Name</label>
        <input required value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control"></input>
      </div>
    </div>

    <div className="col-lg-12">
      <div className="form-group">
        <label>Email</label>
        <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control"></input>
      </div>
    </div>

    <div className="col-lg-12">
      <div className="form-group">
        <label>Mobile</label>
        <input required value={phone} onChange={(e)=>{setPhone(e.target.value)}} className="form-control"></input>
      </div>
    </div>

    <div className="col-lg-12">
      <div className="form-check">
        <input checked={active} onChange={(e)=>{setActive(e.target.checked)}} type="checkbox" className="form-check-input"></input>
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
</>
  )
}

export default Empedit