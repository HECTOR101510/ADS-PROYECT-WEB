import axios from "axios";
import React from "react";
import { Alert, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pregunta from "./pregunta";

class Home extends React.Component{

    state={//creacion de objeto llamado estado
        data: [],
        showAlert: false,
        alertText: ""
    }
    componentDidMount(){
        axios.get("Preguntas").then(response=>{//Realiza una solicitud GET a la URL "Preguntas".
            this.setState({data: response.data});//se actualiza el estado del componente 
            console.log("Hemos entrado a la BD preguntas");
        }).catch(error=>{
            console.info(error);
            this.setState({showAlert: true, alertText:"ERROR EN LA BD"});
            console.log("ERROR EN BD NO FUNCIONA");
        })
    }
    render() {
        const { data, showAlert, alertText } = this.state;
        return (
            <Container className="MarginContainer" >
                <h1 className="AlignCenter font-weight-bold" > CRUD </h1>
                <hr style={{ width: "80%" }} />
                {
                    showAlert ?
                    <Alert variant="danger">
                        {alertText}
                    </Alert>
                    :null
                }
                <div class="d-flex align-items-center justify-content-center">
                    <Button variant="info" style={{ margin: "12px" }}>
                        <Link to="/Proyecto/registro" className="CustomLink font-weight-bold">NUEVA PREGUNTA</Link>
                    </Button>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                    <Table striped bordered className="table table-bordered border-dark table-primary table-wrap" style={{width:'auto'}}>
                        <thead>
                            <tr>
                                <th className="font-weight-bold table-success" style={{textAlign:'center'}}>Pregunta</th>
                                <th className="font-weight-bold table-success" style={{textAlign:'center'}}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="font-weight-bold">
                            {
                                data.map(pregunta=>{
                                    return<Pregunta {...pregunta}/>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        )
    }
}
export default Home;