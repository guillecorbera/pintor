import React, { useRef, useState } from 'react';
import Modal from './Modal'; // Importa el componente Modal
import emailjs from '@emailjs/browser';
import { Bounce,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contacto.css';

const Contacto = () => {
  // CONSTANTES PARA EL MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

 

 // FIN CONSTANTES PARA EL MODAL
 const htmlContent = '<h2>Condiciones Generales</h2><p>Bienvenido a nuestra página web. Antes de utilizar nuestros servicios, te invitamos a revisar nuestras condiciones generales que rigen el uso de esta plataforma y la protección de tus datos personales.</p><h3>1. Privacidad y Protección de Datos</h3><p>Nos comprometemos a proteger tu privacidad y tus datos personales de acuerdo con las disposiciones de la ley de protección de datos vigente. La información que nos proporcionas, incluyendo tu nombre, teléfono y correo electrónico, se utilizará únicamente con el propósito de contactarte en relación con los servicios que ofrecemos. No compartiremos tu información con terceros sin tu consentimiento explícito, excepto cuando sea necesario para cumplir con obligaciones legales.</p><h3>2. Uso de la Información Personal</h3><p>Tu información personal se utilizará exclusivamente para gestionar tu solicitud de servicios, responder a tus consultas, brindarte información relevante sobre nuestros servicios y mantener una comunicación efectiva contigo. No utilizaremos tus datos para enviar comunicaciones de marketing no solicitadas ni compartiremos tu información con terceros con fines comerciales.</p><h3>3. Seguridad de la Información</h3><p>Implementamos medidas de seguridad adecuadas para proteger tus datos personales contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Utilizamos tecnologías y procedimientos de seguridad estándar de la industria para garantizar la confidencialidad y la integridad de tus datos.</p><h3>4. Consentimiento y Control</h3><p>Al proporcionar tus datos personales a través de nuestra página web, aceptas los términos y condiciones de esta política de privacidad. Tienes derecho a acceder, corregir, actualizar o eliminar tu información personal en cualquier momento. Si deseas ejercer estos derechos o tienes alguna pregunta sobre cómo utilizamos tus datos, no dudes en ponerte en contacto con nosotros. Al utilizar nuestra página web y nuestros servicios, aceptas estas condiciones generales y nuestra política de privacidad. Nos reservamos el derecho de actualizar o modificar estas condiciones en cualquier momento sin previo aviso. Te recomendamos revisar periódicamente esta página para estar al tanto de cualquier cambio. Si tienes alguna pregunta o inquietud sobre nuestras condiciones generales o nuestra política de privacidad, no dudes en contactarnos.</p><p>Gracias por confiar en nosotros.</p>'
 const modalNombre= "modalContacto"

  const form = useRef();
  // Estado local para los valores de los campos del formulario
  const [formValues, setFormValues] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: ''
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // Función para limpiar los valores de los campos del formulario
  const clearForm = () => {
    setFormValues({
      from_name: '',
      from_email: '',
      from_phone: '',
      message: ''
    },
    setIsChecked(false)
    );
  };

  // Estado local para el estado del checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Función para manejar cambios en el checkbox
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Función para enviar el mensaje utilizando emailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Verifica si los campos del formulario están vacíos
    if (!formValues.from_name || !formValues.from_email || !formValues.from_phone || !formValues.message) {
      toast.error('Por favor, complete todos los campos del formulario.', {
        position: "bottom-right",
        autoClose: 1800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return; // No envía el formulario si algún campo está vacío
    }

    // Verifica si el checkbox está marcado antes de enviar el formulario
    if (isChecked) {
    //   emailjs.sendForm('service_t0iy95l', 'template_lrfxvdp', form.current, {
    //    publicKey: 'wx374IKPM0iJjsHQu'
    emailjs.sendForm('service_x0l9nb1', 'template_rlt44sn', form.current, {
          publicKey: 'HvFCYd-mu1v6SmHIZ'
      }).then(
        () => {
          toast.success('¡El formulario se envió exitosamente!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          console.log('SUCCESS!');
          // Limpiar los valores del formulario después de enviar
          clearForm();
        },
        (error) => {
          toast.error('Error: algo ha fallado, inténtelo de nuevo!!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          console.log('FAILED...', error.text);
        }
      );
    } else {
      // Si el checkbox no está marcado, muestra un mensaje de error
      toast.error('Por favor, acepte las condiciones generales para enviar el formulario.', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className='contacto'>
      <div className='contacto-texto'>
        <h3>Formulario de Contacto</h3>
        <p>Si necesita más información, ingrese sus datos en este formulario y nos pondremos en contacto lo antes posible. (Rellenar todos los campos) </p>
      </div>
      <div className='contacto-form'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input
            type="text"
            name="from_name"
            value={formValues.from_name}
            onChange={handleChange}
          />
          <label>E-mail</label>
          <input
            type="email"
            name="from_email"
            value={formValues.from_email}
            onChange={handleChange}
          />
          <label>Teléfono</label>
          <input
            type="phone"
            pattern="[0-9]{9}"
            title="Por favor, ingrese nueve dígitos numéricos"
            name="from_phone"
            value={formValues.from_phone}
            onChange={handleChange}
          />
          <label>Mensaje</label>
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />

          <div className="modal">
            {/* Cambiamos el botón por un enlace que abre el modal */}
            <a href="#" onClick={openModal} content={""}>Condiciones Generales</a>
            
            {/* Renderiza el componente Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} content={htmlContent} email={""} telef={""} nombreClase={modalNombre} />
          </div>

          {/* Checkbox */}
          <div className="checkbox-label">
            <input type="checkbox" id="checkbox-condiciones" onChange={handleCheckboxChange} checked={isChecked} />
            <label>Acepto las condiciones generales</label>
          </div>

          {/* Botón de enviar mensaje */}
          <button type="submit" className={`submit-button ${isChecked ? '' : 'disabled'}`}>Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
