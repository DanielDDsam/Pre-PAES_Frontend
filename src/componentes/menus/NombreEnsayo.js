import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import TipsPAES from "./TipsPAES";
import axios from "axios";
import { Apiurl } from "../../Services/apirest";


const cookies = new Cookies();
const ApiurlGetIdEssayUser = Apiurl + "custom_essays/";
function NombreEnsayo(props) {
  const [showModal, setShowModal] = useState(false);
  const [essay_ids, setEssay_ids] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  async function IniciarEnsayo(){
    const token = localStorage.getItem("token");
    const essayId = parseInt(localStorage.getItem("user_id")) ;
    setEssay_ids(props.idEnsayo)
    console.log("hola")
    console.log(essayId)
    
    try {
      const response = await axios.post(ApiurlGetIdEssayUser, {
        essay_ids: [props.idEnsayo],
        user: essayId,
        name: props.temario, 
        is_custom: false,
        current_questions : 10
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.setItem("new_id",response.data.id);
      console.log(response.data);
      window.location.href = "./Menu/" + props.urlEnsayo;
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="card p-3 mb-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div className="iconMenu">
            {" "}
            <img className="logoMenu" src={props.imagen} alt="" />{" "}
          </div>
          <div className="ms-2 c-details">
            <h6 className="mb-0">{props.temario}</h6>
          </div>
        </div>
        <div className="badge ">
          {" "}
          <span>Ensayo</span>{" "}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="heading">
          Matemática(M1)
          <br />
          {props.temario}
        </h3>
        <div className="mt-4">
          <Button
            variant="dark"
            className={props.estadoBoton + " btn-lg m-2 "}
            onClick={handleShow}
          >
            Iniciar
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body  >
        <h2>{props.temario}</h2>
              
                <p className="modal-bodyText">{props.contentBody}</p>
        
            
             <div className="contentTipPAES"> <TipsPAES/></div> 
        
          <Button
            variant="dark"
            className={props.estadoBoton + " btn-lg m-2 "}
            onClick={IniciarEnsayo }
          >
            Iniciar
          </Button>
        </Modal.Body>
        
      </Modal>
    </div>
  );
}

export default NombreEnsayo;