import { BrowserRouter as Router,Routes,Route, HashRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from './assets/Components/NavbarCustom.jsx';
import Home from './assets/Pages/Home';
import ABB from './assets/Pages/ABB';


function App() {


  return (
    <>
    <HashRouter>
       <NavbarCustom></NavbarCustom>
       
       <Routes>
       <Route  exactly path="/" element={<Home/>}/>
       <Route  exactly path="/ABB" element={<ABB/>}/>
       
      </Routes>
     </HashRouter>
    </>
  )
}

export default App


