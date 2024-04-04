import React from 'react';
import './Modal.css'; // Estilos del modal

const Modal = ({ isOpen, onClose, content, email, telef, nombreClase }) => {
  // Estado local para controlar el contenido del modal
  // const [content] = useState('Aquí va el contenido del modal');

  // Función para cerrar el modal
  const handleClose = () => {
    onClose();
  };

  // Si el modal no está abierto, no se muestra nada
  if (!isOpen) {
    return null;
  }


  return (
    <div className="modal-overlay">
      <div className={nombreClase}>
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <div className="modal-content">
          {/* <p>{content}</p> */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {/* <p>Puedes contactarme en:</p> */}
          <p><a href={`mailto:${email}`}>{email}</a></p>
          <a href={`tel:${telef}`}>{telef}</a>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
