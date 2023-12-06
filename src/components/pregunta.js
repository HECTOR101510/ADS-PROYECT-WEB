import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//<td>{pregunta}</td> toma el valor o propiedad del objeto pregunta y lo imprime 
const Pregunta = ({ id, pregunta }) => {
    return (
        <tr>
            <td>{pregunta}</td>
            <td className="AlignCenter">
                <Button
                    variant="success"
                    className="M-6">
                    <Link to={`/Practica7/info?id=${id}`} className="CustomLink" >
                        Ver pregunta
                    </Link>
                </Button>
                <Button
                    variant="warning"
                    className="M-6">
                    <Link to={`/Practica7/editar?id=${id}`} className="CustomLink" >
                        Editar pregunta
                    </Link>
                </Button>
                <Button
                    variant="danger"
                    className="M-6">
                    <Link to={`/Practica7/eliminar?id=${id}`} className="CustomLink" >
                        Eliminar pregunta
                    </Link>                    
                </Button>
            </td>
        </tr>
    )
}
export default Pregunta;