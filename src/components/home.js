import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends React.Component{
/*
    state = {
        data: [],
        showAlert: false,
        alertText: ""
    }

    componentDidMount() {
        axios.get("Preguntas").then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.info(error);
            this.setState({ showAlert: true, alertText: "ERROR EN LA OBTENCION DE DATOS" });
        })
    }
     **/
    render() {
        return (
            <Container className="MarginContainer" >
                <h1 className="AlignCenter" > CREAR, ALTAS, BAJAS Y CAMBIOS </h1>
                <hr style={{ width: "80%" }} />
                
                <Button variant="info" style={{ margin: "12px" }}>
                    <Link to="/Proyecto/registro" className="CustomLink">NUEVA PREGUNTA</Link>
                </Button>
                <Table striped bordered >
                    <thead>
                        <tr>
                            <th>Pregunta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
    
                    </tbody>
                </Table>
            </Container>
        )
    }

}
export default Home;