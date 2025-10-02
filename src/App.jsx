import './App.css'
import { BrowserRouter, Route, Routes} from "react-router"; 
import Home from './Pages';
import Collection from './Pages/Collection';
import Teams from './Pages/Teams/Index';
import Contacts from './Pages/Contacts';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Collection" element={<Collection/>}/>
          <Route path="Teams" element={<Teams/>}/>
          <Route path="Contacts" element={<Contacts/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
