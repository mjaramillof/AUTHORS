import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';

import { createAuthor, getAuthor, updateAuthor } from "../services/authorService";
import { useNavigate, useParams } from "react-router-dom";

const MySwal = withReactContent(Swal)

const FormCreationAuthor = () => {
    
    const { id } = useParams();
    
    const navigate = useNavigate();

    const [author, setAuthor] = useState({
        name: ''
    })

    const [alertMsg, setAlertMsg] = useState([])

    const signupSchema = Yup.object().shape({
        name: Yup.string()
            .min(10, 'El nombre debe tener mínimo 10 caracteres')
            .max(100, 'El nombre no puede tener más de 100 caracteres')
            .required('Este campo es requerido')
    });
    

    const handlerSubmit = async (values) => {
        try {
            id ? await updateAuthor(id, values) : await createAuthor(values);
            await MySwal.fire({
                title: <strong>Se ha creado/actualizado el autor de manera exitosa</strong>,
                icon: 'success'
              })
            navigate('/autores', { replace: true });

        } catch(err) {
            console.log(err.response.data);
            Object?.entries(err.response.data).map((e)=>{
                console.log(e[1].message);
                setAlertMsg ([...alertMsg, e[1].message]);
            })
        }
    }

    const getAuthorFromService = async () => {
        try {
            const authorToUpdate = await getAuthor(id);
            console.log(authorToUpdate)
            setAuthor(authorToUpdate.data.author);

        } catch(err) {
            console.log(err.response.data);
            Object?.entries(err.response.data).map((e)=>{
                console.log(e[1].message);
                setAlertMsg ([...alertMsg, e[1].message]);
            })
        }
    }   

    useEffect(() => {
        id && getAuthorFromService();
    }, [])

    return (
        <div className="App">
            <h1>Creación y Edición de Autores</h1>
            <Card style={{ width: '25rem', display:'flex'}}>
                <Link to="/autores">Regresar a Autores</Link>
                    <Formik
                        enableReinitialize
                        initialValues={author}
                        validationSchema={signupSchema}
                        onSubmit={values => {
                            console.log(values);
                            handlerSubmit(values)
                        }}
                    >
                        {({ errors, touched, getFieldProps }) => (
                            <FormikForm>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><h4>Nombre del Autor</h4></Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa el nombre del autor" value={author.name} {...getFieldProps('name')}/>
                                </Form.Group>  
                                {errors.name && (
                                    <div className="errors-message">
                                        <p>{errors?.name}</p>
                                    </div>
                                )}    
                                <Button variant="primary" type="submit">
                                    Create/Update
                                </Button>
                                <Button href={'/autores'} replace={true}>
                                    Cancel
                                </Button>
                                {alertMsg?.map((e)=><p>{e}</p>)}

                            </FormikForm>
                        )}
                    </Formik>           
            </Card>
        </div>
    )
}

export default FormCreationAuthor;