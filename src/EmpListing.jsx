import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const EmpListing = () => {
    const[data,setData]=useState(null);
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
                                <button className='btn btn-success'>Edit</button>
                                <button className='btn btn-danger'>Remove</button>
                                <button className='btn btn-primary'>Details</button>

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