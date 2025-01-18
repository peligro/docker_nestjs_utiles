export async function sendColaBullMQ()
{
    let respuesta =await fetch(`${import.meta.env.VITE_API_URL}colas-bullmq/add`, {headers:{'content-type':'application/json'}});
    //const resultado= respuesta.json();
    return await respuesta.json(); 
}