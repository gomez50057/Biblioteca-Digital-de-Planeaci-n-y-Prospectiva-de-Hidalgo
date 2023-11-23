/* React */
import React, { useState, useMemo, useRef } from "react";
import { createRoot } from 'react-dom/client';


/* Muuri-react */
import { MuuriComponent, AutoScroller, useData } from "muuri-react";
/* Utils & components */
import { Demo, Header, BackgroundHome, AboutUs, Featured, Select, Input, Switch, CardContent, Foouter } from "./components";
import { Pokedex, useFilter } from "./utils";
/* Style */
import "./style.css";

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

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
      Pokedex.cards.map(pokeCard => (
        <PokeCard
          key={pokeCard.pokedexIndex}
          name={pokeCard.name}
          types={pokeCard.types}
          number={pokeCard.number}
          pokedexIndex={pokeCard.pokedexIndex}
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
          {/* Fire, Water, Grass... */}
          <Select
            values={Pokedex.types}
            onChange={e => setFilter({ ...filter, type: e.target.value })}
          />
          {/* Nombre, Categoria, Numero */}
          <Select
            values={Pokedex.cardInfo}
            onChange={e => setSort({ ...sort, value: e.target.value })}
          />
        </Header>
        {/* Switch */}
        <Switch ref={scrollElemRef}>
          <MuuriComponent
            dragEnabled
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

const PokeCard = props => {
  const { types, number, name } = props;
  // e.g. Venosaurus -> Grass Poison.
  const type = `${types[0]} ${types[1] || ""}`;
  // These data will be used for sorting and filtering.
  useData({ name, type, number });
  // Return the content.
  return <CardContent {...props} />;
};

root.render(<App />);


