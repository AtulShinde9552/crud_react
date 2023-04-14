import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Edit = () => {
    const [id, setId]= useState(0)
    const [name, setName]= useState('')
    const [age, setAge]= useState('')
    const [email, setEmail]= useState('')

    const Navigate = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))

    }, [])


    

const HandleUpdate = (e) =>{
    e.preventDefault()
    axios.put(`https://6434e1d583a30bc9ad52eecc.mockapi.io/users/${id}`, {
    e_name: name,
    e_age: age,
    e_email: email
}).then(() => {
    Navigate('/')
})
}


  return (
    <div className='row justify-content-center mt-4'>
            <div className='col-md-4'>
                <div className=' mt-2 mb-2'>
                    <Link to={'/'}><button className='btn btn-primary'>Read Data</button></Link>
                </div>
                <h1>Update Data</h1>
                <form onSubmit={HandleUpdate}>
                    <div className='form-group'>
                        <label>Enter Name</label>
                        <input type="text" placeholder='Name' value={name} className='form-control' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Enter Age</label>
                        <input type="number" placeholder='Age' value={age} className='form-control' onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Enter Email</label>
                        <input type="email" placeholder='E-mail' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className='d-grid'>
                        <input type="submit" value='Update' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Edit