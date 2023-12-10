import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../services/book.services";
import {database} from "../firebase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";


const BooksList = ({getBookId}) => {
    const history = useNavigate()
    const handleClick = ()=>{
        signOut(database).then(val =>{
            console.log(val,"val")
           history('/')
        })
    }
    const [books, setBooks] = useState([]);
    useEffect(() =>{
       getBooks();
    }, [])

    const getBooks = async () => {
        const data = await BookDataService.getAllBooks();
        console.log(data.docs);
        setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      };
  
    const deleteHandler =async(id) =>{
        await BookDataService.deleteBook(id);
        getBooks();
    }
  return (
    <>
    <div className="row justify-content-end mt-3">
          <div className="col-auto">
            <button className="btn btn-danger" onClick={handleClick}>
              Sign Out
            </button>
          </div>
    </div>
    <div className="d-flex justify-content-center align-items-center vh-100">
      
      {/*<pre>{JSON.stringify(books, undefined, 2)}</pre>*/} 
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {books.map((doc, index) =>{
                return(
                    <tr key ={doc.id}>
                    <td>{index +1}</td> {/*because array start from 0*/}
                    <td>{doc.title}</td>
                    <td>{doc.author}</td>
                    <td>{doc.status}</td>
                    <td>
                        <Button variant = "secondary" className="edit" onClick ={(e) =>getBookId(doc.id)}>
                            Edit
                        </Button>
                        <Button variant = "danger" className="delete" onClick ={(e) =>deleteHandler(doc.id)}>
                            Delete
                        </Button>
                        <p>!.. After click Edit button go to previos page and change ..!</p>

                    </td>
                   </tr>  
                )
            })}
           
        </tbody>
      </Table>
      </div>

    </>
  );
};

export default BooksList;