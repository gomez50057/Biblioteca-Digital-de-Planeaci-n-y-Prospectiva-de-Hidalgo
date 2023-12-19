// import { resolveSrcName } from "./utils";
import React, { useState, useEffect, forwardRef } from "react";
// Demo component.
export const Demo = ({ children }) => (
  <section className="grid-demo">
    <div className="ImgBanda" >
      <img src="../img/banda.png" alt="Descripción de la imagen" />
    </div>
    {children}
  </section>
);

// Header component.
export const Header = ({ children }) => (
  <div className="controls">
    <div className="containerSubTiDoc">
      <img src="../img/titulop.png" alt="Descripción de la primera imagen" style={{ marginRight: '20px', width: '30px', height: '30px' }} />
      <h2 className="subtitulo">DOCUMENTOS</h2>
      <img src="../img/titulop.png" alt="Descripción de la segunda imagen" style={{ marginLeft: '20px', width: '30px', height: '30px' }} />
    </div>
    {children}
  </div>
);

// Home component.
export const BackgroundHome = ({ children }) => {
  
  const handleButtonClick = () => {
    const aboutUsElement = document.getElementById('aboutUs');
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home"
      style={{
        backgroundImage: `url(../img/homeDigital.png)`,
        paddingLeft: "20px",
      }}
    >
      <div className="logotipo">
        <img src="../img/Logotipo.png" alt="Logo de la empresa" />
      </div>
      <div className="homeText">
        <img src="../img/homeText.png" alt="Logo de la empresa" />
      </div>
      
      <button className="home-button" onClick={handleButtonClick}>
        Más información
      </button>
      <h2 className="homeh2">"Una educación sólida es clave <span>para el futuro de nuestro estado."</span> </h2>
      <h3 className="homeh3">- Julio Menchaca Salazar</h3>
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
      const targetCount = 600;
      const interval = duration / targetCount;

      const counterInterval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 300) {
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
      <div className="AboutUsIMG">
        <img src="../img/libro.png" alt="Logo de la empresa" />
      </div>
      <div className="AboutUstxt">
        <p className="homeh3">Bienvenido a la Biblioteca Digital de Planeación, herramienta pública para el almacenamiento y consulta de los documentos, programas, planes, informes, estudios, artículos, análisis, guías y demás instrumentos en los que participa la Unidad de Planeación y Prospectiva del Gobierno del Estado de Hidalgo.
        </p>
        <p>Este espacio virtual tiene como objetivo ser una herramienta útil para la población, en donde de manera ágil y sencilla pueden consultar y descargar los materiales que les resulten útiles.
        </p>
        <p>Con la Biblioteca Digital de Planeación, contribuimos a llevar a Hidalgo a su máximo potencial.
        </p>
        <div className="contadorlibros">
          <p>{count}</p>
          <p>Total de publicaciones</p>
          <img src="../img/librosTotal.png" alt="Logo de la empresa" />
        </div>
      </div>
      {children}
    </section>
  );
});

// Featured component.
export const Featured = ({ children }) => (
  <section className="featured" style={{ backgroundImage: `url(../img/back.png)`, }}>
    <div className="containerSubTi">
      <img src="../img/titulop.png" alt="Descripción de la primera imagen" style={{ marginRight: '20px', width: '30px', height: '30px' }} />
      <h2 className="subtitulo"> PUBLICACIONES DESTACADAS</h2>
      <img src="../img/titulop.png" alt="Descripción de la segunda imagen" style={{ marginLeft: '20px', width: '30px', height: '30px' }} />
    </div>
    {/* Contenedor de 4 elementos */}
    <div className="containerFeatured">
      {/* Contenedor 1 */}
      <div className="item">
        <img src="../img/primer.png" alt="Item 1" />
      </div>
      {/* Contenedor 2 */}
      <div className="item">
        <img src="../img/primer.png" alt="Item 2" />
      </div>
      {/* Contenedor 3 */}
      <div className="item">
        <img src="../img/primer.png" alt="Item 3" />
      </div>
      {/* Contenedor 4 */}
      <div className="item">
        <img src="../img/primer.png" alt="Item 4" />
      </div>
    </div>
    {children}
  </section>
);

// Foouter component.
export const Foouter = ({ children }) => (
  <section className="foouter"
    style={{ backgroundImage: `url(../img/foouter.png)`, }}>
    <div className="foouterLogo">
      <img src="../img/LogotipoBlanco.png" alt="Logo" />
    </div>
    <div className="fooutertxt">
      <div className="foouterBar"></div>
      <h1>Biblioteca Digital de Planeación</h1>
      <div className="foouterInfo">
        <h2>Unidad de Planeación y Prospectiva</h2>
        <div className="FoouterUbicacion">
          <img src="../img/ubicacion.png" alt="Logo" />
          <p>Plaza Juárez S/N Col. Centro <span>Pachuca de Soto, Hidalgo, México.</span></p>
        </div>
      </div>
    </div>
    {children}
  </section>
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

  const { types, name, year, descriptionBook, pdfSrc } = booksData;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <img src={imgSrc} alt={`Imagen de ${name}`} /> */}
        <h2>{name}</h2>
        <p>{descriptionBook}</p>
        <p>Año de Publicación: {year}</p>
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
  ({ types, name, year, descriptionBook, pdfSrc }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const truncatedName = name.length > 40 ? `${name.slice(0, 40)}...` : name;

    const booksData = {
      types,
      name,
      year,
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
              <span>{year}</span>
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

