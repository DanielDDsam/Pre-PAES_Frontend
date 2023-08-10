import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import enfoqueMate from "../../images/adaptative-learning.jpg";
import ensayovista from "../../images/youtube-g2675e32c1_1280.png";
import numerosI from "../../images/numbers.jpg";
import NavbarHome from "../navbar/NavbarHome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import resultado from "../../images/resultado.png";

/*hola mundo */
const cookies = new Cookies();
function Home() {
  function componentDidMount() {
    if (cookies.get("username")) {
      window.location.href = "/Menu";
    }
  }
 
  componentDidMount();
  return (
    <div id="home" >
      <NavbarHome contacto="Contactos" iniciarSesion="Iniciar Sesión" />
      <div id="intro-example" className="hero-home p-1 text-center bg-image ">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100 p-3">
            <div className="text-white" style={{display:'flex', textAlign:'center', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <h1 className="mb-3" style={{fontSize:'50px'}}>
                Bienvenido a <span className="m-1"><span>Pre</span><span className='text-warning'>PAES</span></span>
              </h1>
              <h4 className="mb-4" style={{width:'70%'}}>
                Nuestra plataforma está diseñada para ayudarte a preparar y alcanzar un excelente desempeño en la PAES de matemáticas.
              </h4>
              <a
                className="boton-home btn  btn-lg m-2"
                href="https://docs.google.com/forms/d/e/1FAIpQLSedb1BwmEtJ2tuxyq8UUc9c60OsoWg1zKDN19qaGLMXzkDxJA/viewform?usp=sf_link"
              >
                ¿Primera vez aquí? ¡Contáctanos!
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="  mb-0" style={{ marginTop: "700px",backgroundImage: 'url("https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F56b24a0ed886439998c5e92b75fce660?width=2000")' }}>
        <div className="container">

        

      <h2 className="text-center mb-5" style={{fontWeight:"bold",marginTop:"10rem"}}>
              ¿Qué nos diferencia de las otras
              <span className="text-muted"> plataformas</span>?
            </h2>
        <div className="row ">
          <div className="col-md-4 mt-3">
            <div className="card" style={{display:"flex",justifyContent:'center', alignContent:'center', alignItems:'center'}}>
              <img src={enfoqueMate} className="card-img-top" alt="Ventaja 1" />
              <div className="card-body">
                <h5 className="card-title">Ensayo con dificultad <span className='text-muted'>adaptativa</span> </h5>

              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card">
              <img src={ensayovista} className="card-img-top" alt="Ventaja 2" />
              <div className="card-body" style={{display:"flex",justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <h5 className="card-title">Retroalimentación con <span className='text-muted'>Videos</span></h5>
               
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card">
              <img src={numerosI} className="card-img-top" alt="Ventaja 3" />
              <div className="card-body" style={{display:"flex",justifyContent:'center', alignContent:'center', alignItems:'center'}}>
              <h5 className="card-title">Enfocado a <span className='text-muted'>Matemáticas</span></h5>
              </div>
            </div>
          </div>
        </div>
       
</div>
      </section>
      <section className="responsive-section marketing">
  <div className="container" style={{marginTop:'4rem',display:'grid', placeItems :'center'}}>
  <h2 className="text-center mb-5" style={{fontWeight:""}}>
              Buscamos ser el <span className="text-muted"> complemento</span> perfecto <br></br> para tu preparación en la PAES
              
            </h2>
    <div className="row">
      
      <div className="col-md-6 mt-2" style={{display:'grid', placeItems :'center'}}>
        <div className="image">
          <img src={resultado} alt="Imagen de la sección"/>
        </div>
      </div>
      <div className="col-md-6" style={{display:'grid', placeItems :'center'}}>
        <div className="content">
          <h2>Texto de la sección</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;
