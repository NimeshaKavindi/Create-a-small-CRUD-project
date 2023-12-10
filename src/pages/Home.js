import React, {useState, useEffect} from "react";
import {database} from "../firebase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book.services";
import { Link } from 'react-router-dom';




const Home = ({id, setBookId}) => {

    const history = useNavigate()
    const handleClick = ()=>{
        signOut(database).then(val =>{
            console.log(val,"val")
           history('/')
        })
    }
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({error: false, msg:""});

    const handleSubmit =async(e) =>{
         e.preventDefault();
         setMessage("");
         if (title ==="" || author ===""){
          setMessage({error:true, msg:"All feilds are mandatory"});
          return;
         }
         const newBook = {
          title,
          author,
          status
         }
         console.log(newBook);

         try{
          if(id!== undefined && id !==""){
            await BookDataService.updateBook(id, newBook);
            setBookId("");
            setMessage({error: false, msg:("Updated successfully")});
          }else{
            await BookDataService.addBooks(newBook);
            setMessage({error: false, msg:("new book added successfully")});
          }
          
         }catch(err){
           setMessage({error: true, msg:err.message});
         }

         setTitle("");
         setAuthor("");


    };

    const editHandler = async () => {
      setMessage("");
      try {
        const docSnap = await BookDataService.getBook(id);
        console.log("the record is :", docSnap.data());
        setTitle(docSnap.data().title);
        setAuthor(docSnap.data().author);
        setStatus(docSnap.data().status);
      } catch (err) {
        setMessage({ error: true, msg: err.message });
      }
    };
  
    useEffect(() =>{
      console.log("Id here is: ",id)
      if(id !== undefined && id !==""){
        editHandler();
      }

    }, [id])

    return(
        <div className="container-fluid"  >
        <div className="row justify-content-end mt-3">
          <div className="col-auto">
            <button className="btn btn-danger" onClick={handleClick}>
              Sign Out
            </button><br/><br/><br/><br/><br/><br/>
          </div>
        </div>
        
        <div className="p-4 box">
         {/* This is a comment about using the Alert component from Bootstrap */}
         {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}


            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBookTitle">
                <InputGroup>
                  <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
                  <Form.Control type="text" placeholder="Book Title" value = {title} onChange={(e) => setTitle(e.target.value)}/>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBookAuthor">
                <InputGroup>
                  <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
                  <Form.Control type="text" placeholder="Book Author" value ={author} onChange={(e) => setAuthor(e.target.value)} />
                </InputGroup>
              </Form.Group>
              <div className="button"></div>
              <ButtonGroup aria-label="Basic example" className="mb-3">
              
                <Button
                  disabled={flag}
                  variant="success"
                  onClick={(e) => {
                    setStatus("Available");
                    setFlag(true);
                  }}
                >
                  Available
                </Button>
                <Button
                  variant="danger"
                  disabled={!flag}
                  onClick={(e) => {
                    setStatus("Not Available");
                    setFlag(false);
                  }}
                >
                  Not Available
                </Button>
                
              </ButtonGroup>
              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Add/ Update
                </Button>
              </div>
            </Form>
      </div>
       <br/><br/>
      <div className="text-end"> {/* Aligning content to the right */}
        <Link to="/BookList">
            <Button variant="dark">Go to see the books list</Button>
        </Link>
      </div>
      
      </div>
    )
}

export default Home;