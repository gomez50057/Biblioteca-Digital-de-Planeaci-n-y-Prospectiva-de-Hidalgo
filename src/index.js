/* React */
import React, { useState, useMemo, useRef } from "react";
import { createRoot } from 'react-dom/client';


/* Muuri-react */
import { MuuriComponent, AutoScroller, useData } from "muuri-react";
/* Utils & components */
import { Demo, Header, BackgroundHome, AboutUs, Featured, Select, Input, Switch, CardContent, Foouter } from "./components";
import { datosBibliotecaDigital, useFilter } from "./utils";
/* Style */
import "./style.css";

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

// const cardInfoOptions = datosBibliotecaDigital.cardInfo.map(option => option === "year" ? "Año" : option);


// App.
const App = () => {
  // Sort state.
  const [sort, setSort] = useState({
    value: "type",
    options: { descending: true }
  });

  // Estado del filtro.
  const [filter, setFilter] = useState({
    name: "",
    type: ""
  });

  // Método de filtrado.
  const filterFunction = useFilter(filter.name, filter.type);

  // Memorice a los children para mejorar su rendimiento.
  const children = useMemo(
    () =>
      datosBibliotecaDigital.cards.map(bookCard => (
        <BookCard
          key={bookCard.booksIndex}
          name={bookCard.name}
          descriptionBook={bookCard.descriptionBook}
          types={bookCard.types}
          year={bookCard.year}
          pdfSrc={bookCard.pdfSrc}
          booksIndex={bookCard.booksIndex}
        />
      )),
    []
  );

  // Scroll container ref.
  const scrollElemRef = useRef();

  // Render.
  return (
    <div>
      <BackgroundHome>
        {/* <Input onKeyUp={e => setFilter({ ...filter, name: e.target.value })} /> */}
      </BackgroundHome>

      <AboutUs>
      </AboutUs>

      <Featured>
      </Featured>




      <Demo>
        {/* Header */}
        <Header>
          {/* Name input */}
          <Input onKeyUp={e => setFilter({ ...filter, name: e.target.value })} />
          {/* Categoria*/}
          <Select
            values={datosBibliotecaDigital.types}
            onChange={e => setFilter({ ...filter, type: e.target.value })}
          />
          {/* Nombre, Categoria, Numero */}
          <Select
            values={datosBibliotecaDigital.cardInfo}
            onChange={e => setSort({ ...sort, value: e.target.value })}
          />

        </Header>
        {/* Switch */}
        <Switch ref={scrollElemRef}>
          <MuuriComponent
            // dragEnabled
            dragFixed
            sort={sort.value}
            sortOptions={sort.options}
            filter={filterFunction}
            layoutDuration={300}
            layoutEasing={"ease-out"}
            dragAutoScroll={{
              sortDuringScroll: false,
              targets: [
                {
                  element: scrollElemRef,
                  axis: AutoScroller.AXIS_Y
                }
              ]
            }}
          >
            {children}
          </MuuriComponent>
        </Switch>
      </Demo>
      <Foouter>
      </Foouter>
    </div>

  );
};

const BookCard = props => {
  const { types, year, name } = props;
  // Combina los tipos en un solo string (si hay dos tipos)
  const type = `${types[0]} ${types[1] || ""}`;
  // Estos datos se utilizarán para ordenar y filtrar.
  useData({ name, type, year });
  // Renderiza el componente `CardContent` y pasa todas las propiedades a este componente hijo
  return <CardContent {...props} />;
};

root.render(<App />);


