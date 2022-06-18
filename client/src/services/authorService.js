const axios = require('axios');

export const createAuthor = (author) => axios.post('http://localhost:8080/api/authors', {
    author 
});

export const getAuthors = () => axios.get('http://localhost:8080/api/authors');

export const getAuthor = (id) => axios.get(`http://localhost:8080/api/authors/${id}`);

export const updateAuthor = (id, author) => axios.put(`http://localhost:8080/api/authors/update/${id}`, {
    author 
});

export const deleteAuthor = (id) => axios.delete(`http://localhost:8080/api/authors/delete/${id}`);