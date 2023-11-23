// import { resolveSrcName } from "./utils";
import React, { useState, useEffect } from "react";

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

// Select component.
export const BackgroundHome = ({ children }) => (
  <section className="home"
    style={{
      backgroundImage: `url(../img/BibliotecaDigital.png)`,
      paddingLeft: "20px",
    }}
  >
    <div className="logotipo">
      <img src="../img/Logotipo.png" alt="Logo de la empresa" />
    </div>
    <button className="home-button">
      Más información
    </button>
    <h2 className="homeh2">"Hoy les puedo decir que en <span>Hidalgo tenemos rumbo y estrategia"</span> </h2>
    <h3 className="homeh3">Julio R. Menchaca Salazar</h3>

    {children}
  </section>
);

// Select component.
export const AboutUs = ({ children }) => {
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(4000);

  useEffect(() => {
    const targetCount = 600;
    const interval = duration / targetCount;

    const counterInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 300) {
          // Primeros 300 números, contar rápidamente
          return prevCount + 10;
        } else if (prevCount < targetCount) {
          // Últimos 300 números, contar lentamente
          return prevCount + 1;
        } else {
          clearInterval(counterInterval);
          // Cuando esté a punto de llegar a targetCount, reduce la duración a 10 segundos
          setDuration(10000);
          return targetCount;
        }
      });
    }, interval);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(counterInterval);
  }, [duration]); // Agrega duration al array de dependencias

  return (
    <section className="AboutUs">
      <div className="AboutUsIMG">
        <img src="../img/libro.png" alt="Logo de la empresa" />
      </div>
      <div className="AboutUstxt">
        <p className="homeh3">Te damos la bienvenida a la Biblioteca Digital de la SPPC, una iniciativa de la Secretaría de Planeación y Participación Ciudadana enmarcada en el contexto de la Alianza para el Gobierno Abierto (Open Government Partnership), de la cual forma parte el Gobierno de Jalisco. Los esfuerzos de dicha alianza propician compromisos concretos de los gobiernos para promover la transparencia, incrementar la participación ciudadana en los asuntos públicos, combatir la corrupción y aprovechar las nuevas tecnologías para robustecer la gobernanza. Por ello, el Gobierno de Jalisco pone a disposición de la ciudadanía jalisciense, mediante la aplicación de nuevas tecnologías de la información y la comunicación, este amplio repositorio de registros relevantes para el seguimiento de la práctica pública.</p>
        <div className="contadorlibros">
          <p>{count}</p>
          <p>Total de publicaciones</p>
          <img src="../img/librosTotal.png" alt="Logo de la empresa" />
        </div>
      </div>
      {children}
    </section>
  );
};

// Select component.
export const Featured = ({ children }) => (
  <section className="featured"
    style={{
      backgroundImage: `url(../img/back.png)`,
    }}
  >

    <div className="containerSubTi">
      <img src="../img/titulop.png" alt="Descripción de la primera imagen" style={{ marginRight: '20px', width: '30px', height: '30px' }} />
      <h2 className="subtitulo"> COLECCIONES DESTACADAS</h2>
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

// Select component.
export const Foouter = ({ children }) => (
  <section className="foouter"
    style={{
      backgroundImage: `url(../img/foouter.png)`,
    }}
  >



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





// Card content.
export const CardContent = React.memo(
  ({ types, name, number, pokedexIndex }) => {
    // const srcName = resolveSrcName(name);

    return (
      <div className="poke-card-container">
        <div
          className="poke-card"
          data-pokemon-type={types[0]}
          id="f727f904-94d9-48e1-ab91-f7e76f1f18f5"
        >
          <div className="poke-card__image">
            {/* <img
              className=""
              // src={`http://cdn3.bulbagarden.net/uploads/pokemonsunmoon/pokemon_stat/image/${pokedexIndex}/pokedex_${number}${srcName}.png`}
              src={`https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/1000?cb=20150621181250`}

              alt={`Pokedex ${number} ${name}`}
            /> */}

          </div>
          <h2 className="poke-card__name">
            <span>{name}</span>
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
          </h2>
          <span className="poke-card__pokedex-number">
            <span>{`#${number}`}</span>
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
          <ul className="poke-card__types">
            {types.map(type => (
              <li
                key={type}
                className={"poke-card__types__" + type.toLowerCase()}
              >
                <span>{type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

