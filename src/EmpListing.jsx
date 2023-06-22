import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const EmpListing = () => {
    const[data,setData]=useState(null);
    const navigate=useNavigate();

    const Loaddetail=(id)=>{
        navigate('/employee/detail/'+id);
    }
    const Loadremove=(id)=>{
        if(window.confirm("do You want to remove?")){
            fetch("http://localhost:8000/employee/" + id,{
                method:"DELETE", 
                }).then((res)=>{
                alert('Removed Successfully')
                window.location.reload();
                }).catch((err)=>{
                console.log(err.message);
                })
                
        }
        
    }
    const Loadedit= (id)=>{
        navigate('employee/edit/' +id);

    }
    useEffect(()=>{
        fetch("http://localhost:8000/employee").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setData(resp);
        }).catch((err)=>{
            console.log(err.message);
        })

    },[])
  return (
    <div className='container'>
        <div className='card-title'>
            <h2>Employee Listing</h2>

        </div>
        <div>
            <Link to='/employee/create' className='btn btn-success'>Add New(+)</Link>
        </div>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead className='bg-dark'>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    { data&&
                    data.map(item=>{
                        return(<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button onClick={()=>{Loadedit(item.id)}} className='btn btn-success'>Edit</button>
                                <button onClick={()=>{Loadremove(item.id)}} className='btn btn-danger'>Remove</button>
                                <button onClick={()=>{Loaddetail(item.id)}} className='btn btn-primary'>Details</button>

                            </td>

                        </tr>)
                        
                        
                    })
                    }

                </tbody>

            </table>
        </div>


    </div>
  )
}

export default EmpListing