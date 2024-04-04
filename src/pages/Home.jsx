import './Home.css'
// import ImagenAmpliada from './ImagenAmpliada';

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-texto">
                {/* <br /> */}
                <h2>Carlos Cantero - Pintor</h2>
                <p>¡Bienvenido a la página de Carlos Cantero, tu experto en pintura para el hogar!</p>
                {/* <p>Transforma tu casa en el hogar de tus sueños con nuestros servicios de pintura profesional. En Carlos Cantero - Pintor, nos enorgullecemos de ofrecer soluciones de pintura personalizadas que realzan la belleza y el estilo de tu hogar.</p> */}

{/* Desde un cambio de color fresco hasta una renovación completa, nuestro equipo capacitado y experimentado se encarga de cada detalle para garantizar resultados impecables. Con un enfoque en la calidad, la atención al detalle y la satisfacción del cliente, estamos aquí para hacer realidad tus ideas de diseño. */}

                <p>¡Déjanos ayudarte a dar vida a tus espacios! Contáctanos hoy para obtener una consulta gratuita y descubre cómo podemos hacer brillar tu hogar con un toque de color.</p>
                <p>Correo electrónico: <a className='parpadeo' href="mailto:correo@ejemplo.com">carloscanteropintor@gmail.com</a></p>
                {/* <p>Teléfono: 688567890</p> */}
                <p>Llámanos:<a className='parpadeo' href="tel:662680047"> +34 662 68 00 47</a></p>
            </div>
            <div className="home-imagen">
                 {/* <img className="imagen-home" src="/src/images/sergey-semin-Y0WXj3xqJz0-unsplash.png" alt="Imagen"  /> */}
                 <picture>
                    {/* Utiliza la imagen en formato WebP como fuente principal */}
                    <source className="imagen-home" srcSet="/cubos-pintura-suelo.webp" type="image/webp" />
                    {/* Agrega una imagen de respaldo en formato JPEG */}
                    <img className="imagen-home" src="/cubos-pintura-suelo.jpg" alt="latas de pintura" />
                </picture>


                 {/* <img className='imagen-home' src="/cubos-pintura-suelo.jpg" alt="Latas de pintura"/> */}
                 {/* <ImagenAmpliada src="/src/images/cubos-pintura-suelo.jpg" alt="Cubos de pintura" /> */}


            </div>
        </div>
    )

}

export default Home;