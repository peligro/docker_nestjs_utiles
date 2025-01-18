export async function generarExcel()
{
    let respuesta =await fetch(`${import.meta.env.VITE_API_URL}reportes/excel`, {headers:{ }});
    //const resultado= respuesta.json();
     
}