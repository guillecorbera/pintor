import React, { useState } from 'react';
import './AcercaDe.css'
import Modal from './Modal'; // Importa el componente Modal

const AcercaDe = () => {

 // CONSTANTES PARA EL MODAL
 const [isModalOpen, setIsModalOpen] = useState(false);

 const modalNombre ="modalAcerca"

 const email = "guillecorbera@gmail.com"
 const telef = "663 41 41 35"

 // Función para abrir el modal
 const openModal = () => {
   setIsModalOpen(true);
 };

 // Función para cerrar el modal
 const closeModal = () => {
   setIsModalOpen(false);
 };


return (
    <div className="user-info-container">
      	<div className="user-info">
        	<div className="user-data">
				<h2>Carlos Cantero</h2>
				<h2>Pintor</h2>
				<h3>Correo electrónico: <a className='parpadeo' href="mailto:carloscantero@gmail.com">carloscanteropintor@gmail.com</a></h3>
				<h3>Llámanos:<a className='parpadeo' href="tel:+34662680047"> +34 662 68 00 47</a></h3>
	        </div>
    	    <div className="responsibility-text">
        		<p >Ofrecemos un servicio completo de pintura de obras que transformará por 
                  completo tus espacios. Con un equipo de expertos en pintura y una pasión por el detalle, 
                  nos dedicamos a embellecer cada rincón de tu hogar u oficina. 
                  Desde la preparación de superficies hasta la aplicación de capas finales, 
                  nuestro enfoque meticuloso garantiza resultados duraderos y de alta calidad. 
                  Ya sea que desees refrescar un espacio existente o dar vida a una nueva construcción,
                  estamos aquí para cumplir con tus necesidades y superar tus expectativas.
                  Confía en nosotros para hacer realidad la visión de tus proyectos de pintura.</p>
            </div>
			<div className="modal">
            {/* Cambiamos el botón por un enlace que abre el modal */}
            <a href="#" onClick={openModal}>Página creada por: Guillermo Martínez</a>
            
            {/* Renderiza el componente Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} content={"Pagina creada por: Guillermo Martínez"} email={email} telef={telef} nombreClase={modalNombre}/>
          </div>

          {/* <p className='creador'>Pagina creada por: Guillermo Martínez</p>
          <p className='creador'>Correo electrónico: <a href="guillecorbera@gmail.com">guillecorbera@gmail.com</a></p>
          <p className='creador'>Móvil:<a href="tel:+34663414135"> +34 663 41 41 35</a></p> */}
        </div>
	</div>
    // </div>
  );
};

export default AcercaDe;
