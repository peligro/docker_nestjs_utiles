 
import {generarExcel} from './../servicios/ReportesService';

const ExcelPagina = () => { 
    const sendgenerarExcel = async ()=>
    {
         await generarExcel();
         
    };
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Generar excel</li>
                </ol>
            </nav>
            <h1>Generar excel</h1>
            <hr />
            <a href={`${import.meta.env.VITE_API_URL}reportes/excel`}>Generar</a>
             
        </>
    )
}

export default ExcelPagina