 import './Default.css';
 
const Default = () => {
    return (
        <div className="not-found">
            <img src="http://www.supah.it/dribbble/008/008.jpg" />
            <div className="texto-overlay">
                <h1>404</h1>
                <h2>Página no encontrada</h2>
                <p>Creo que has derramado la pintura...</p>
                <button onClick={
                    () => window.history.back()
                }>Ir a Inicio</button>
            </div>
        </div>
)}  




export default Default;