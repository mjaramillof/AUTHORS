import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

import AuthorComponent from "../components/Author";
import { getAuthor } from "../services/authorService";

const Detail = () => {

    const { id } = useParams();

    const [author, setAuthor] = useState();

    const getAuthorFromService = async () => {
        const AuthorFromService = await getAuthor(id);
        console.log(AuthorFromService)
        setAuthor(AuthorFromService.data.author);
    }

    useEffect(() => {
        id && getAuthorFromService();
        console.log(id)
    }, [id])

    return(
        <>
            {author && (
                <div>
                    <Link to="/authors">Volver</Link>
                    <h1>Detalle de Autor</h1>
                    <AuthorComponent author={author}/>
                </div>

            )}
        </>
    )
}

export default Detail;