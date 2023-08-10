import React, { useState,useEffect }   from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import logoPrePaes from "../../images/prepaesLogo.png"

const cookies = new Cookies();
function NavbarHome(props) {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 90 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop < 89 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);


    return (
       
        <nav
      className={`navbar sticky-top navbar-expand-md navbar-dark ${
        isScrolled ? 'bg-dark' : ''
      }`}
      data-spy="affix"
      style={{
        backgroundColor: 'transparent',
        fontSize: '19px',
        transition: 'background-color 0.25s ease-in-out', // Transición suave
      }}
      data-offset-top="30"
    >
            <div className="container-md">
                <a className="navbar-brand " href="#">
                <img src={logoPrePaes} style={{width:'33px', marginRight:'0.3rem',marginTop:'-5px'}}/>
                <span className="m-1" style={{fontSize:"23px"}}><span>Pre</span><span className='text-warning '>PAES</span></span> 
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active " aria-current="page" href="/" >Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active " href="#contacto">{props.contacto}</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav  ">    
                        <li className="nav-item ">
                            <a className="nav-link active " aria-current="page" href="#" onClick={() => (window.location.href = "./Login")}>{props.iniciarSesion}</a>
                        </li>
 
                    </ul>
                    <hr className="d-md-none text-white-50"/>
                </div>
            </div>
        </nav>
          
    );
}

export default NavbarHome;
