import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/index.js';
import { LoginScreen, RegisterScreen, ProfileScreen } from './Screens';



function App() {
  return (
   <>
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/profile' element={<ProfileScreen/>}/>
      </Routes>
    </BrowserRouter>
   
   </>
  )
}

export default App;
