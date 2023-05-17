
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Cart from './pages/cart'
import Photos from './pages/photos'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Photos/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
