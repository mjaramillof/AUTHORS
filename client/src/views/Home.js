import React, { useState,useEffect } from "react";
import AuthorComponent from "../components/Author";
import { deleteAuthor, getAuthors } from "../services/authorService";
import { Table } from "reactstrap";
import { Link } from 'react-router-dom';

const Home = () => {

    const [authors, setAuthors] = useState([]);

    const getAuthorsFromService = async () => {
        try {
            const AuthorsFromService = await getAuthors();
            console.log(AuthorsFromService)
            setAuthors(AuthorsFromService.data.authors);
        } catch(err) {
            console.log(err);
        }
    }

    const deleteAuthorFromService = async (id) => {
        try {
            await deleteAuthor(id);
            const newAuthorArr = authors.filter(author => author._id !== id);
            setAuthors(newAuthorArr);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAuthorsFromService();
    }, []);

    return(
        <div className="form-container">
            <h1>Favorite Authors</h1>
            <Link to="/crear-autor">Crear Nuevo Autor</Link>
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            Author
                        </th>
                        <th>
                            Actions available
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { authors?.map(author =>(
                        <tr>
                            <td>{author.name}</td>
                            <td>
                                <AuthorComponent author={author} key={author._id} deleteAuthorFromService={deleteAuthorFromService}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table> 
        </div>
        )
        
    }
    
    export default Home;