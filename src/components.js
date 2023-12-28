// import { resolveSrcName } from "./utils";
import React, { useState, useEffect, forwardRef } from "react";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      // Limpiar el intervalo cuando se completa el texto
      return () => clearInterval(intervalId);
    }
  }, [text, currentIndex]);

  // Efecto para hacer parpadear el cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      } else {
        // Si hemos llegado al final del texto, ocultamos el cursor
        setShowCursor(false);
      }
    }, 500);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(cursorInterval);
  }, [text, currentIndex]);

  return (
    <h2 className="homeh2">
      {displayText}
      {showCursor && '|'}
    </h2>
  );
};


// Home component.
export const BackgroundHome = ({ children }) => {
  const handleButtonClick = () => {
    const aboutUsElement = document.getElementById('aboutUs');
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="../img/homeDigital.mp4" type="video/mp4" />
      </video>
      <div className="logotipo">
        <img src="../img/Logotipo.png" alt="Logo de la Unidad Planeación" />
      </div>
      <div className="homeText">
        <img src="../img/homeText.png" alt="Logo de Biblioteca Digital de Planeación" />
      </div>
      <button className="home-button" onClick={handleButtonClick}>
        Más información
      </button>
      <TypewriterEffect text='"El conocimiento nos guía en la búsqueda de respuestas y soluciones para el bien común."' />
      <h3 className="homeh3 wow animate__animated animate__zoomInRight" data-wow-duration="13s">- Julio Menchaca Salazar</h3>
      {forwardRef.current && <AboutUs ref={forwardRef} />}
      {children}
    </section>
  );
};

// aboutUs component.
export const AboutUs = forwardRef(({ children }, ref) => {
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(4000);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.AboutUs');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Ajusta estos valores según sea necesario para activar el conteo en el momento deseado
        const triggerTop = window.innerHeight * 0.5; // Activar cuando el 50% del componente sea visible
        const triggerBottom = window.innerHeight * 0.3; // Desactivar cuando el 70% del componente esté fuera de vista

        if (elementTop < triggerTop && elementBottom > triggerBottom) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetCount = 156;
      const interval = duration / targetCount;

      const counterInterval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 70) {
            // Primeros xx números, contar rápidamente
            return prevCount + 10;
          } else if (prevCount < targetCount) {
            return prevCount + 1;
          } else {
            clearInterval(counterInterval);
            setDuration(10000);
            return targetCount;
          }
        });
      }, interval);
      // Limpieza del intervalo al desmontar el componente o cuando se alcance el conteo
      return () => clearInterval(counterInterval);
    }
  }, [isVisible, duration]);
  return (

    <section id="aboutUs" ref={ref} className="AboutUs">
      <div className="AboutUsIMG wow animate__animated animate__zoomIn" data-wow-offset="350">
        <img src="img/leyendo.png" alt="Persona leyendo nube de palabras" />
      </div>
      <div className="AboutUstxt">
        <p className="homeh3 wow animate__animated animate__fadeInRightBig" data-wow-offset="350"><span>Bienvenido a la Biblioteca Digital de Planeación</span>, herramienta pública para el almacenamiento y consulta de los documentos, programas, planes, informes, estudios, artículos, análisis, guías y demás instrumentos en los que participa la Unidad de Planeación y Prospectiva del Gobierno del Estado de Hidalgo.
        </p>
        <p className="wow animate__animated animate__fadeInRightBig" data-wow-offset="350">Este espacio virtual tiene como objetivo ser una herramienta útil para la población, en donde de manera ágil y sencilla pueden consultar y descargar los materiales que les resulten útiles.
        </p>
        <p className="wow animate__animated animate__fadeInRightBig" data-wow-offset="250"><span>Con la Biblioteca Digital de Planeación, contribuimos a llevar a Hidalgo a su máximo potencial.</span>    </p>
        <div className="contadorlibros wow animate__animated animate__zoomInUp" data-wow-offset="250">
          <img src="img/librosTotal.png" alt="Icono de libro digital" />
          <p>{count} <span>Publicaciones</span></p>
        </div>
      </div>
      {children}
    </section>
  );
});


// Featured component.
export const Featured = ({ children }) => (
  <section className="featured" style={{ backgroundImage: `url(..//img/back.png)`, }}>
    <div className="containerSubTi wow animate__animated animate__fadeInBottomLeft" data-wow-offset="250">
      <img src="../img/titulop.png" alt="Estrella Tzuhu" style={{ marginRight: '20px', width: '30px', height: '30px' }} />
      <h2 className="subtitulo">DESTACADAS</h2>
      <img src="../img/titulop.png" alt="Estrella Tzuhu" style={{ marginLeft: '20px', width: '30px', height: '30px' }} />
    </div>
    {/* Contenedor de 4 elementos */}
    <div className="containerFeatured">
      {/* Contenedor 1 */}
      <div className="item">
        <img className="wow animate__animated animate__slideInDown" data-wow-offset="250" src="../img/primer.png" alt="Destacado Item 1" />
      </div>
      {/* Contenedor 2 */}
      <div className="item">
        <img className="wow animate__animated animate__slideInUp" data-wow-offset="250" src="../img/primer.png" alt="Destacado Item 2" />
      </div>
      {/* Contenedor 3 */}
      <div className="item">
        <img className="wow animate__animated animate__slideInDown" data-wow-offset="250" src="../img/primer.png" alt="Destacado Item 3" />
      </div>
      {/* Contenedor 4 */}
      <div className="item">
        <img className="wow animate__animated animate__slideInUp" data-wow-offset="250" src="../img/primer.png" alt="Destacado Item 4" />
      </div>
    </div>
    {children}
  </section>
);

// Demo component.
export const Demo = ({ children }) => (
  <section className="grid-demo">
    <div className="ImgBanda" >
      <img src="../img/banda.png" alt="Banda con glifos de Hidalgo" />
    </div>
    {children}
  </section>
);

// Documents component.
export const Documents = ({ children }) => (
  <div className="documents">
    <div className="containerSubTiDoc wow animate__animated animate__fadeInBottomRight">
      <img src="../img/titulop.png" alt="Estrella Tzuhu" style={{ marginRight: '20px', width: '30px', height: '30px' }} />
      <h2 className="subtitulo">DOCUMENTOS</h2>
      <img src="../img/titulop.png" alt="Estrella Tzuhu" style={{ marginLeft: '20px', width: '30px', height: '30px' }} />
    </div>
    {children}
  </div>
);

// Select component.
export const Select = ({ values, onChange }) => (
  <div className={"control"}>
    <div className="control-icon">
      <i className="material-icons">&#xE164;</i>
    </div>
    <div className="select-arrow">
      <i className="material-icons">&#xE313;</i>
    </div>
    <select
      className="control-field filter-field form-control"
      onChange={onChange}
      defaultValue={values[0]}
    >
      {values.map(value => (
        <option key={value} value={value.toLowerCase()}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

// Input component.
export const Input = ({ onKeyUp }) => (
  <div className={"control"}>
    <div className="control-icon">
      <i className="material-icons">&#xE8B6;</i>
    </div>
    <input
      className={"control-field search-field form-control"}
      onKeyUp={onKeyUp}
      type="text"
      placeholder={"Buscar..."}
    />
  </div>
);

// Switch component.
export const Switch = React.forwardRef(({ children }, ref) => (
  <div className="container">
    <div className="main snapped">
      <div className="screenframe">
        <div className="inlay">
          <div className="screen" ref={ref}>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
));


// Tooltip component
const Tooltip = ({ children, text }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

// Modal component
const Modal = ({ children, isOpen, onClose, booksData }) => {
  if (!isOpen) {
    return null;
  }
  // const { types, name, year, description, descriptionBook, imgSrc } = booksData;

  const { types, name, año, descriptionBook, pdfSrc } = booksData;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <img src={imgSrc} alt={`Imagen de ${name}`} /> */}
        <h2>{name}</h2>
        <p>{descriptionBook}</p>
        <p>Año de Publicación: {año}</p>
        <p>Categoría: {types.join(', ')}</p>
        <a href={pdfSrc} download target="_blank" className="cta">
          <span>Descargar PDF</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <div className="close-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
};


// Card content.
export const CardContent = React.memo(
  ({ types, name, año, descriptionBook, pdfSrc }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const truncatedName = name.length > 40 ? `${name.slice(0, 40)}...` : name;

    const booksData = {
      types,
      name,
      año,
      descriptionBook,
      pdfSrc,
    };

    return (
      <>
        <div className="book-card-container" onClick={() => setIsModalOpen(true)}>
          <div className="book-card" data-pokemon-type={types[0]}>
            <div className="book-card__image">
              <img src="../img/primer.png" alt={`Imagen de ${name}`} />
            </div>
            <Tooltip text={name}><h3 className="book-card__name">
              <span>{truncatedName}</span>
              <svg className="right">
                <use xlinkHref="#icon-rounded-tri-right">
                  <svg id="icon-rounded-tri-right" viewBox="0 0 32 32">
                    <title>rounded-tri-right</title>
                    <path
                      className="path1"
                      d="M3.424 1.76l20.864 28.48c0.8 1.088 2.080 1.728 3.424 1.728h-27.712v-31.936c1.344 0 2.624 0.64 3.424 1.728z"
                    />
                  </svg>
                </use>
              </svg>
              <svg className="left">
                <use xlinkHref="#icon-rounded-tri-left">
                  {" "}
                  <svg id="icon-rounded-tri-left" viewBox="0 0 32 32">
                    <title>rounded-tri-left</title>
                    <path
                      className="path1"
                      d="M28.576 1.728l-20.896 28.48c-0.8 1.088-2.080 1.728-3.424 1.728h27.744v-31.936c-1.344 0-2.624 0.64-3.424 1.728z"
                    />
                  </svg>
                </use>
              </svg>
            </h3></Tooltip>

            <span className="book-card__pokedex-year">
              <span>{año}</span>
              <svg className="right">
                <use xlinkHref="#icon-rounded-slim-tri-bottom-right">
                  <svg
                    id="icon-rounded-slim-tri-bottom-right"
                    viewBox="0 0 32 32"
                  >
                    <title>rounded-slim-tri-bottom-right</title>
                    <path
                      className="path1"
                      d="M13.472 2.944l-9.312 26.016c-0.64 1.824-2.368 3.040-4.32 3.040v-32.096h17.92c-1.92 0-3.648 1.216-4.288 3.040z"
                    />
                  </svg>{" "}
                </use>
              </svg>
              <svg className="left">
                <use xlinkHref="#icon-rounded-slim-tri-bottom-left">
                  <svg id="icon-rounded-slim-tri-bottom-left" viewBox="0 0 32 32">
                    <title>rounded-slim-tri-bottom-left</title>
                    <path
                      className="path1"
                      d="M18.56 2.848l9.312 26.080c0.64 1.824 2.4 3.040 4.32 3.040v-32.192h-17.984c1.952 0.032 3.68 1.248 4.352 3.072z"
                    />
                  </svg>
                </use>
              </svg>
            </span>
            {/* <ul className="book-card__types">
            {types.map(type => (
              <li
                key={type}
                className={"book-card__types__" + type.toLowerCase()}
              >
                <span>{type}</span>
              </li>
            ))}
          </ul> */}
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} booksData={booksData} />

      </>


    );
  }
);

// Foouter component.
export const Foouter = ({ children }) => (
  <section className="foouter"
    style={{ backgroundImage: `url(../img/foouter.png)`, }}>
    <div className="foouterLogo">
      <img src="../img/LogotipoBlanco.png" alt="Logo de la Unidad Planeación en blanco" />
    </div>
    <div className="fooutertxt">
      <div className="foouterBar"></div>
      <h1>Biblioteca Digital de Planeación</h1>
      <div className="foouterInfo">
        <h2>Unidad de Planeación y Prospectiva</h2>
        <div className="FoouterUbicacion">
          <img src="../img/ubicacion.png" alt="Icono de ubicación" />
          <p>Plaza Juárez S/N Col. Centro <span>Pachuca de Soto, Hidalgo, México.</span></p>
        </div>
      </div>
    </div>
    {children}
  </section>
);