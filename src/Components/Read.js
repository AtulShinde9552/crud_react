import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Read = () => {

    const [redData, setredData] = useState([])

    const getData = () => {
        axios.get('https://6434e1d583a30bc9ad52eecc.mockapi.io/users')
            .then((res) => {
                setredData(res.data)
                console.log(res);
            })

    }

    useEffect(() => {
        getData()
    }, [])


    const HandleDelete = (id) => {

        axios.delete(`https://6434e1d583a30bc9ad52eecc.mockapi.io/users/${id}`)
            .then(() => {
                getData()
            })
    }

    const setDataToStorage = (id, name, age, email)=>{
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('age',age)
        localStorage.setItem('email',email)

    }

    return (
        <div className='row'>
            <div className='col-md-10'>
                <div className=' mt-2 mb-2'>
                    <Link to={'/create'}><button className='btn btn-primary'>Create New Data</button></Link>
                </div>
                <table className='table table-bordered table-striped table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th className='text-center'>EDIT</th>
                            <th className='text-center'>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            redData.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.e_name}</td>
                                            <td>{item.e_age}</td>
                                            <td>{item.e_email}</td>
                                            <td className='text-center'>
                                               <Link to='/edit'> <button className='btn btn-primary' 
                                               onClick={()=>setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>EDIT</button></Link>
                                            </td>
                                            <td className='text-center'>
                                                <button className='btn btn-danger' onClick={() => { if (window.confirm('Are You Sure To Delete Data')) { HandleDelete(item.id) } }}>DELETE</button>
                                            </td>
                                        </tr>
                                    </>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Read