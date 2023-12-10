import Register from './pages/Register';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import BooksList from './pages/BookList';



function App() {
   return(
    <BrowserRouter>
    
      <div>
        <Routes>
            <Route path ="/" element={<Login />} />
            <Route path ="/register" element={<Register />} />
            <Route path ="/home" element={<Home />} />
            <Route path ="/booklist" element={<BooksList />} />
        </Routes>
        
        
      </div>
    
    
    </BrowserRouter>
    
    
   );
}

export default App;