import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from './Components/Create'
import Edit from './Components/Edit'
import Read from './Components/Read'


const App = () => {
  return (
    <div className='container'>
      <Router>
     
      <Routes>
        <Route  path='/create' element={ <Create/>}/>
        <Route path='/' element={<Read />} />
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App