import React from "react";
import { Redirect } from "react-router-dom";
import swal from 'sweetalert';

class Login extends React.Component {
  constructor()
  {
    super();
    this.state = {condition: false}
 }
      
      validar=(usuario,password) =>{
        //fetch('http://localhost:8080/Proyecto/Login?User='+usuario+'&password='+password+'')
        fetch('Login?User='+usuario+'&password='+password+'')
        .then(response => response.text())
        .then(usuario =>{
          let ret=usuario.includes("yes");

          if(ret)
          {
          this.setState({ condition: true });          
          swal({//Se utiliza sweetalert para cambiar las alertas mas dinamicas
            title:"ACEPTADO",
            text:"USUARIO VALIDO",
            icon:"success",
            button: "ENTRAR"
          })        
          }
          else          
          {
          this.setState({ condition: false });                    
          swal({
            title:"ERROR",
            text:"USUARIO NO VALIDO",
            icon:"error",
            button: "SALIR"
          })
          document.getElementById("User").value = ''; 
          document.getElementById("password").value = '';
          }
        })
    }
    render() {
      const styles = {
          padding : '5px'
      }

      const { condition } = this.state;

      if (condition) {
        return <Redirect to='/Proyecto/home'/>;
      }

      return(
        <body style={{backgroundImage:'url(./encuestas.jpg)'}} id="equis">
        <div class="d-flex align-items-center justify-content-center" style={styles} id="equis">
            <div className = "center-container" style={styles} id="equis">
                <h1 className="AlignCenter" > LOGIN </h1>
            <div class="form-group">
                <label class="form-label font-weight-bold" for="User">Usuario</label>
                <input placeholder="Ingrese el usuario" type="text" id="User" class="form-control font-weight-bold" />
            </div>
            <div class="form-group"><label class="form-label font-weight-bold" for="password">Password</label>
                <input placeholder="Ingrese su contraseña" type="password" id="password" class="form-control font-weight-bold" />
            </div>
            <button class="btn btn-info d-flex align-items-center justify-content-center font-weight-bold" onClick={() => this.validar(document.getElementById("User").value,document.getElementById("password").value)}>
                Sumit
            </button>
            </div>  
        </div>
        </body>
           )    
  }
}
export default Login; 