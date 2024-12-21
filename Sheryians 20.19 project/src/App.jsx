import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home.jsx'
import Detail from './component/detail.jsx'


function App() {

  
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/details/:id' element={ <Detail/> } />
        </Routes>
      </div>
    </>
  )
}

export default App
