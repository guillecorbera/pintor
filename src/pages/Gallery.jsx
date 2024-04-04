import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css'; 
import { baseUrl } from "../config";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
		<div  className='galeria-container'> 
			<h2>Galería de Trabajos</h2>
			<p>Aquí puedes ver algunos trabajos hechos, donde se pueden apreciar el Antes y el Después.</p>

			{/* galeria 1 */}
			<div className="card">
				<div className="texto">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio, dicta quaerat necessitatibus sit porro magnam quibusdam fugit deserunt dolorem dolores, ea repellat! Aliquid debitis error, adipisci ex quidem corrupti.</p>
					{/* <button onClick={() => window.scrollTo(0, 0)}>Ir a Inicio</button>				 */}
				</div>
				<div className="slider-container">
				<Slider {...settings}>
					<div className='image-container'>
						<img src={"/IMG20240202093827.jpg"} alt="Imagen 1" />
						<div className="overlay" ><p>Antes</p></div>
					</div>
					<div className='image-container'>
						<img src={"/IMG20240217155611.jpg"} alt="Imagen 2" />
						<div className="overlay" ><p>Después</p></div>
					</div>
				</Slider>
				</div>
			</div>

			{/* galeria 2 */}
			<div className="card">
				<div className="texto">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio, dicta quaerat necessitatibus sit porro magnam quibusdam fugit deserunt dolorem dolores, ea repellat! Aliquid debitis error, adipisci ex quidem corrupti.</p>
					{/* <button onClick={() => window.scrollTo(0, 0)}>Ir a Inicio</button>				 */}
				</div>
				<div className="slider-container">
				<Slider {...settings}>
					<div className='image-container'>
						<img src={"/IMG20231104121118.jpg"} alt="Imagen 3" />
						<div className="overlay" ><p>Antes</p></div>
					</div>
					<div className='image-container'>
						<img src={"/IMG20231104112148.jpg"} alt="Imagen 4" />
						<div className="overlay" ><p>Antes</p></div>
					</div>
					<div className='image-container'>
						<img src={"/IMG20231104161759.jpg"} alt="Imagen 5" />
						<div className="overlay" ><p>Después</p></div>
					</div>
				</Slider>
				</div>
			</div>
			{/*  */}
			{/* galeria 3 */}
			<div className="card">
				<div className="texto">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio, dicta quaerat necessitatibus sit porro magnam quibusdam fugit deserunt dolorem dolores, ea repellat! Aliquid debitis error, adipisci ex quidem corrupti.</p>
					{/* <button onClick={() => window.scrollTo(0, 0)}>Ir a Inicio</button> */}
				</div>
				<div className="slider-container">
				<Slider {...settings}>
					<div className='image-container'>
						<img src={"/IMG20231028142547.jpg"} alt="Imagen 6" />
						<div className="overlay" ><p>Antes</p></div>
					</div>
					<div className='image-container'>
						<img src={"/IMG20231028142542.jpg"} alt="Imagen 7" />
						<div className="overlay" ><p>Antes</p></div>
					</div>
					<div className='image-container'>
						<img src={"/IMG20231101135727.jpg"} alt="Imagen 8" />
						<div className="overlay" ><p>Después</p></div>
					</div>
					<div className='image-container'>
						<img src={"/IMG20220609131637.jpg"} alt="Imagen 8" />
						<div className="overlay" ><p>Después</p></div>
					</div>
				</Slider>
				</div>
			</div>
		    {/*  */}

			{/* galeria 4 */}
			<div className="card">
				<div className="texto">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio, dicta quaerat necessitatibus sit porro magnam quibusdam fugit deserunt dolorem dolores, ea repellat! Aliquid debitis error, adipisci ex quidem corrupti.</p>
					{/* <button onClick={() => window.scrollTo(0, 0)}>Ir a Inicio</button>				 */}
				</div>
				<div className="slider-container">
					<Slider {...settings}>
						<div className='image-container'>
							<img src={"/IMG20230817193638.jpg"} alt="Imagen 9" />
							<div className="overlay" ><p>Antes</p></div>
						</div>
						<div className='image-container'>
							<img src={"/IMG20230817194126.jpg"} alt="Imagen 10" />
							<div className="overlay" ><p>Antes</p></div>
						</div>
						<div className='image-container'>
							<img src={"/IMG20230930150851.jpg"} alt="Imagen 10" />
							<div className="overlay" ><p>Después</p></div>
						</div>
						<div className='image-container'>
							<img src={"/IMG20231001174455.jpg"} alt="Imagen 8" />
							<div className="overlay" ><p>Después</p></div>
						</div>
					</Slider>
				</div>
			</div>
			{/*  */}


			{/* galeria 5 */}
			<div className="card">
				<div className="texto">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio, dicta quaerat necessitatibus sit porro magnam quibusdam fugit deserunt dolorem dolores, ea repellat! Aliquid debitis error, adipisci ex quidem corrupti.</p>
					{/* <a href="" onClick={() =>window.scrollTo(0,0)}>#</a> */}
					{/* <button onClick={() => window.scrollTo(0, 0)}>Ir a Inicio</button>				 */}
				</div>
				<div className="slider-container">
					<Slider {...settings}>
						<div className='image-container'>
							<img src={"/IMG20231001165903.jpg"} alt="Imagen 9" />
						<div className="overlay antes" ><p>Antes</p></div>
						</div>
						<div className='image-container'>
							<img src={"/IMG20230930150821.jpg"} alt="Imagen 10" />
							<div className="overlay antes" ><p>Después</p></div>
						</div>
						<div className='image-container'>
							<img src={"/IMG20231001174441.jpg"} alt="Imagen 8" />
							<div className="overlay despues" ><p>Después</p></div>
						</div>
					</Slider>
				</div>
			</div>
			{/*  */}

			{/* galeria 5 */}
			<div className="card">
				<div className="texto">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio, dicta quaerat necessitatibus sit porro magnam quibusdam fugit deserunt dolorem dolores, ea repellat! Aliquid debitis error, adipisci ex quidem corrupti.</p>
					{/* <button onClick={() => window.scrollTo(0, 0)}>Ir a Inicio</button> */}
				</div>
				<div className="slider-container">
					<Slider {...settings}>
						<div className='image-container'>
							<img src={"/IMG20220223090653.jpg"} alt="Imagen 9" />
						<div className="overlay antes" ><p>Antes</p></div>
						</div>
						<div className='image-container'>
							<img src={"/IMG20220219145744.jpg"} alt="Imagen 10" />
							<div className="overlay antes" ><p>Después</p></div>
						</div>
				</Slider>
				</div>
			</div>
			 {/* Botón para ir al inicio de la galería */}
				<div className="go-to-top-button" onClick={() => window.scrollTo(0, 0)}>
				<FontAwesomeIcon icon={faArrowUpFromBracket} />
				</div>

	    </div>
    // </div>
  );
};

export default Gallery;
