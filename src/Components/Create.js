import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Create = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const Navigate = useNavigate()

    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://6434e1d583a30bc9ad52eecc.mockapi.io/users', {
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
                <h1>Create Data</h1>
                <form onSubmit={HandleSubmit}>
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
                        <input type="submit" value='submit' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create