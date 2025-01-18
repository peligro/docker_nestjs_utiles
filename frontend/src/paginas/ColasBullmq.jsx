import { useState } from 'react';
import {sendColaBullMQ} from './../servicios/ColasService';

const ColasBullmq = () => {
    const [mensaje, setMensaje] = useState('');
    const enviarCola = async ()=>
    {
        let datos = await sendColaBullMQ();
        console.log(datos)
        setMensaje(datos);
    };
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Colas BullMQ</li>
                </ol>
            </nav>
            <h1>Colas BullMQ</h1>
            <hr />
            <button onClick={()=>{enviarCola()}}>Enviar</button>
            <hr/>
            <div>
                <ul>
                    <li>JobId: {mensaje.jobId}</li>
                    <li>Job Name: {mensaje.jobName}</li>
                    <li>mensaje: {mensaje.mensaje}</li>
                    <li>Fecha: {mensaje.fecha}</li>
                </ul>
            </div>
        </>
    )
}

export default ColasBullmq