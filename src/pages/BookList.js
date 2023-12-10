import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../services/book.services"


const BooksList = () => {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
       getBooks();
    }, [])

    const getBooks = async () => {
        const data = await BookDataService.getAllBooks();
        console.log(data.docs);
        setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      };
  
  return (
    <>
    <pre>{JSON.stringify(books, undefined, 2)}</pre>} 
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
           <tr>
            <td>1</td>
            <td>Node Js</td>
            <td>David</td>
            <td>Available</td>
           </tr>
        </tbody>
      </Table>
    </>
  );
};

export default BooksList;