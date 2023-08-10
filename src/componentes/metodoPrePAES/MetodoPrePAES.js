import React from 'react';
import { useState, useEffect } from "react";
import LineaProgreso from './LineaProgreso';
import BienvenidaMetodoPrePAES from './BienvenidaMetodoPrePAES';

const MetodoPrePAES = () => {
    const [showBienvenida, setShowBienvenida] = useState(true);

    const hideBienvenida = () => {
    setShowBienvenida(false);
    };
    return (
        <>
             {showBienvenida && <BienvenidaMetodoPrePAES onHide={hideBienvenida} />}
             {!showBienvenida && <LineaProgreso />}
        </>
    );    
}
export default MetodoPrePAES;    