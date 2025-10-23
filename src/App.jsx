import './App.css'
import { BrowserRouter, Route, Routes} from "react-router"; 
import Home from './Pages';
import Book from './Pages/Book';
import Teams from './Pages/Teams/Index';
import Contacts from './Pages/Contacts';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

// 1. Import Header dan Footer di sini
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    // 2. Hapus className="container" dari div ini
    <div>
      <BrowserRouter>
        {/* 3. Render Header di sini (di luar Routes) */}
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="Book" element={<Book/>}/>
          <Route path="Teams" element={<Teams/>}/>
          <Route path="Contacts" element={<Contacts/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
        </Routes>

        {/* 4. Render Footer di sini (di luar Routes) */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App