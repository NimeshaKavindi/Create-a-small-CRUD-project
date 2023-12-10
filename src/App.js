import Register from './pages/Register';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import BooksList from './pages/BookList';
import { useState } from "react";




function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) =>{
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  }

   return(
    <BrowserRouter>
      <div>
        <Routes>
            <Route path ="/" element={<Login />} />
            <Route path ="/register" element={<Register />} />
            <Route path ="/home" element={<Home id={bookId} setBookId = {setBookId}/>} />
            <Route path ="/booklist" element={<BooksList getBookId={getBookIdHandler} />} />
            
        </Routes>
      </div>  
      
      
       
    </BrowserRouter>
    

    
    
   );
}

export default App;