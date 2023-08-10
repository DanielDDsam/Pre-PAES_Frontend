import React, { useState } from 'react';
import axios from "axios";
import '../../hojas-de-estilo/LineaProgreso.css';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { Speed, BarChart, Star, Lock, ArrowForward } from '@mui/icons-material';
import { Apiurl } from "../../Services/apirest"
import EnsayoPrePAES from './EnsayoPrePAES';
const ApiurlGetIdEssayUser = Apiurl + "custom_essays/";
const cardStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  padding: '8px',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const iconStyle = {
  fontSize: '40px',
  color: 'rgb(236, 180, 27)', // Puedes cambiar el color aquí
};
const levelCardStyle = {
  height: '140px',
  width: '190px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center ',
  texAlign: 'center',
  alignItems: 'center',
 
  padding: '25px',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative', // Added to the card container
};

const LevelCard = ({ level, correct, category,getQuestion }) => {
  const isLocked = correct === null;
  let color = isLocked ? 'gray' : correct ? 'green' : 'red';
  let borderStyle = isLocked ? '1rem solid gray' : correct ? '1rem solid #77dd77' : '1rem solid #ff6961';

  if (correct === true) {
    color = 'green';
    borderStyle = '1rem solid #77dd77';
  } else if (correct === false) {
    color = 'red';
    borderStyle = '1rem solid #ff6961';
  } else if (correct === null) {
    color = 'gray';
    borderStyle = '1rem solid gray';
  }
  let backgroundCategory = 'rgba(132, 182, 244, 0.8)'; // Color pastel algo transparente (0.8 de opacidad)
  let borderCategory = '2px solid #84b6f4'; // Borde del mismo color pero no transparente (1 de opacidad)
  if(category === "Números"){
    backgroundCategory = 'rgba(132, 182, 244, 0.1)';
    borderCategory = '2px solid #84b6f4';
  }else if(category === "Geometría"){
    backgroundCategory = 'rgba(166, 128, 105, 0.1)';
    borderCategory = '2px solid #a68069';
  }else if(category === "Probabilidades"){
    backgroundCategory = 'rgba(244, 132, 244, 0.1)';
    borderCategory = '2px solid #f484f4';
  }else if(category === "Álgebra"){
    backgroundCategory = 'rgba(197, 208, 132, 0.1)';
    borderCategory = '2px solid #c5d084';
  }
  const categoryLabelStyle = {
    display: 'flex',
    padding: '2px 8px',
    justifyContent: 'center',
    margin: '0 auto',
    texAlign: 'center',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.8)',
    background: backgroundCategory, // Color pastel algo transparente (0.8 de opacidad)
    border: borderCategory, // Borde del mismo color pero no transparente (1 de opacidad)
    zIndex: 1, // Set a higher z-index to keep it above the border
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  

  return (
    <Card style={{
      ...levelCardStyle,
      background: isHovered ? 'rgba(0, 0, 0, 0.5)' : 'white',
      cursor: isHovered ? 'pointer' : 'default',
      transition: '0.4s',
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={() => getQuestion()}
    >
    
      
      <CardContent>
      {/*<span style={categoryLabelStyle}>Números</span>*/}
      {!isLocked && (
        <>
         {!isHovered && (
        <>
          <Typography variant="h6" gutterBottom>
            Pregunta {level}
          </Typography>
          <span
            style={{
              ...categoryLabelStyle,
              opacity: isLocked ? 0 : 1,
            }}
          >
            {category}
          </span>
          <Box
            style={{
              width: '100%',
              height: '8px',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderBottom: borderStyle,
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          />
        </>
      )}

   

      {isHovered && (
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transition: '0.3s',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" gutterBottom style={{color:'white'}}>
            Responder
          </Typography><ArrowForward style={{ fontSize: '32px', color: 'white' }} />
        </Box>
      )}
        </>
      )}
        
     
        {isLocked && (
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
          }}
        >
          <Lock style={{ fontSize: '32px', color: 'gray' }} />
        </Box>
      )}
         
      </CardContent>
      
    </Card>
  );
};
const LineaProgreso = () => {
  const [preguntaActual, setPreguntaActual] = useState(1);
  const [showLineaProgreso, setShowLineaProgreso] = useState(true);
  const totalPreguntas = 5; // Reemplaza 5 con el número total de preguntas
  const hideLineaProgreso = () => {
    setShowLineaProgreso(false);
  };


  const handleRespuesta = (respuesta) => {
    if (respuesta === preguntas[preguntaActual - 1].respuesta) {
      // Si la respuesta es correcta, habilitar la siguiente pregunta
      setPreguntaActual((prevPregunta) => prevPregunta + 1);
    } else {
      // Si la respuesta es incorrecta, puedes manejarlo aquí (mostrar un mensaje, etc.)
    }
  };

  const preguntas = [
    // Aquí coloca tus preguntas de matemáticas
    // Cada pregunta puede ser un objeto con 'pregunta', 'respuesta' y otros datos necesarios
    { pregunta: 'Pregunta 1', respuesta: 'Respuesta 1' },
    { pregunta: 'Pregunta 2', respuesta: 'Respuesta 2' },
    { pregunta: 'Pregunta 3', respuesta: 'Respuesta 3' },
    { pregunta: 'Pregunta 4', respuesta: 'Respuesta 4' },
    { pregunta: 'Pregunta 5', respuesta: 'Respuesta 5' },
  ];
  async function getQuestion(){
    const token = localStorage.getItem("token");
    const essayId = parseInt(localStorage.getItem("user_id")) ;
   
    
    try {
      const response = await axios.post(ApiurlGetIdEssayUser, {
        essay_ids: [1,2,3,4],
        user: essayId,
        name: 'One Question', 
        is_custom: false,
        current_questions : 10
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.setItem("new_id",response.data.id);
      console.log(response.data);
      hideLineaProgreso();
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className='section_metodo_prepaes'>
    {showLineaProgreso && (
      <>
        <div className="linea-tiempo">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
      <LevelCard level={1} correct={true} category={"Números"} getQuestion={getQuestion} />
      <LevelCard level={2} correct={false} category={"Geometría"}/>
      <LevelCard level={3} correct={true} category={"Geometría"}/>
      <LevelCard level={4} correct={true} category={"Números"}/>
      <LevelCard level={5} correct={false} category={"Probabilidades"}/>
      <LevelCard level={6} correct={false} category={"Álgebra"}/>
      <LevelCard level={7}  correct={false} category={"Números"}/>
      <LevelCard level={8} correct={null} category={"Álgebra"}/>
      <LevelCard level={9} correct={null} category={"Probabilidades"}/>
      <LevelCard level={10} correct={null} category={"Números"}/>
    </div>
    

  </div>
  <Grid container spacing={3}>
      {/* Tarjeta 1 */}
      <Grid item xs={12} sm={4}>
        <Card style={cardStyle}>
          <Speed style={iconStyle} />
          <CardContent  style={{textAlign:'center'}}> 
            <Typography variant="h6" gutterBottom style={{textAlign:'center'}}> 
              Promedio de tiempo por respuesta
            </Typography>
            <Typography variant="h4">6.8 segundos</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Tarjeta 2 */}
      <Grid item xs={12} sm={4}>
        <Card style={cardStyle}>
          <BarChart style={iconStyle} />
          <CardContent  style={{textAlign:'center'}}>
            <Typography variant="h6" gutterBottom >
              Categoría a reforzar
            </Typography>
            <Typography variant="h4">Geometría</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Tarjeta 3 */}
      <Grid item xs={12} sm={4}>
        <Card style={cardStyle}>
          <Star style={iconStyle} />
          <CardContent  style={{textAlign:'center'}}>
            <Typography variant="h6" gutterBottom>
              Promedio ensayo 1
            </Typography>
            <Typography variant="h4">4.5</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
      </>
    )}  
    {!showLineaProgreso && <EnsayoPrePAES onHide={hideLineaProgreso} />}
    
    
  </div>
  );
};
export default LineaProgreso;
