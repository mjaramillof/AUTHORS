import React from "react";
import Button from "react-bootstrap/esm/Button";

const AuthorComponent = ({ author, deleteAuthorFromService}) => {
console.log(author)

const { _id } = author;
    
    return(
        <>
             <Button href={`/editar-autor/${_id}`} replace={true}>Edit</Button>
             <Button onClick={() => deleteAuthorFromService(_id)}>Delete</Button>
        </>
    )
} 

export default AuthorComponent;