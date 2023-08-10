import React from "react";
import { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import Loading from "../menus/Loading";
import Navbar from "../navbar/Navbar";
import replace from 'react-string-replace'; // Importa la biblioteca react-string-replace
import axios from "axios";
import Cookies from "universal-cookie";
import { Apiurl } from "../../Services/apirest";
const EnsayoPrePAES = () => {
    const cookies = new Cookies();
    const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
    const ecuacionRegex = /\[(.*?)\]/g; // Expresión regular para detectar partes de la cadena que contienen ecuaciones
    const UrlGetOneQuestion = Apiurl + "question_oneQuestion/";
    const [question, setQuestion] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const result = await axios.get(UrlGetOneQuestion);
              setQuestion(result.data);
              console.log(question)
            } catch (error) {
              // Manejo de errores si la solicitud falla
              console.error('Error al obtener la pregunta:', error);
            }
          };
        fetchData();
    }, []);  
   
    return (
        <>
         {question ? ( // Verificar si question no es null o undefined
        <div>


      <div className="contenedor-principal position-relative ">
    
        <div className="contenedor-pregunta">
          <div className="row ">
            <div className="col-md-1">
              <h6 style={{color:"rgb(78, 84, 87)"}}>
                #{question.id}
              </h6>
            </div>
            
           
          </div>
          
         
          
          <h3 className="enunciado-pregunta  ">
          <div>
      {
        replace(
          replace(question.question, ecuacionRegex, (match, i) => {
            return <InlineMath key={i} math={match} />;
          }),
          regex,
          (match, i) => {
            return(
              <div style={{width:'100%', display:'flex', justifyContent:'center', margin:'1rem'}}>
              <img key={i} src={match} alt="Imagen" className='img_question'/>
              </div>);
          }
        )
      }
      
    </div>
          </h3>
          {question.answer.map((respuesta, idk) => (
            <button
            type="button"
            className={`contenedor-alternativa-pregunta `}
          
         
            key={respuesta.id}
           
          >
            <b>{String.fromCharCode(65 + idk) + " . "}</b>
            {replace((respuesta.label).replace('Â', ''), ecuacionRegex, (match, i) => {
         return <InlineMath key={i} math={match} />;
      })}
          </button>
          ))}
         
     
        </div>
        
        
     
      </div>
      
    </div>
    ) : (
        <Loading /> // Muestra el componente Loading mientras se carga la pregunta
      )}
        </>
    );
}
export default EnsayoPrePAES;
