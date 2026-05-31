import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowEmployee from './Components/ShowEmployee'
import AddEmployee from './Components/AddEmployee'
import  EditEmployee from './Components/EditEmployee'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ShowEmployee />} />
        <Route path='/addemployee' element={<AddEmployee />} />
        <Route path='/edit/:empId' element={<EditEmployee />} />
  
      </Routes>
    </Router>
  )
}

export default App