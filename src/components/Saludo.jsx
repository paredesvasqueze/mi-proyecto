import './Saludo.css'
function Saludo(){
    const alumnosfavoritos = [
        "Alumno1", "Alumno2","Alumno3"
    ];
    

return (
    <>
    <h1 className='SaludoComponente' >Soy un saludo de 
        otro componente</h1>
    <h2>Lista de mis alumnos favoritos</h2>
        <ol>
            <li>{alumnosfavoritos[0]}</li>
            <li>{alumnosfavoritos[1]}</li>
            <li>{alumnosfavoritos[2]}</li>
        </ol>
    </>
);
}

export default Saludo