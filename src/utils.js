import { useCallback } from "react";

// Return the filter.
export function useFilter(name, type) {
  name = name.toLowerCase();
  type = type.toLowerCase();

  return useCallback(
    function(data) {
      var isSearchMatch = !name
        ? true
        : data.name.toLowerCase().indexOf(name) > -1;
      var isFilterMatch = type === "all" ? true : data.type.indexOf(type) > -1;
      return isSearchMatch && isFilterMatch;
    },
    [name, type]
  );
}
 
// The list of pokemons.
export const Pokedex = {
  cardInfo: ["Categoría ", "Abecedario", "number"],
  types: [
    "All",
    "Planes",
    "Programas",
    "Acuerdos",
    "Catálogos",
    "Actas",
    "Guías",
    "Atlas",
    "Informe"
  ],
  cards: [
    {
      name: "Plan Estatal de Desarrollo 2022-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "1",
    },
    {
      name: "PROGRAMA ESPECIAL DE DESARROLLO DE OFICIALÍA MAYOR 2023–2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "2",
    },
    {
      name: "PROGRAMA ESPECIAL DE DESARROLLO DE PROCURACIÓN DE JUSTICIA 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "3",
    },
    {
      name: "PROGRAMA ESPECIAL DE DESARROLLO DE PLANEACIÓN Y PROSPECTIVA 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "4",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE HACIENDA 2023 - 2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "5",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE AGRICULTURA Y DESARROLLO RURAL 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "6",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO PARA EL BIENESTAR E INCLUSIÓN SOCIAL 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "7",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE CONTRALORÍA 2023-2028",
      types: ["Planes"],
      number: "008",
      pokedexIndex: "8",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE CULTURA 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "9",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE EDUCACIÓN 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "10",
    },
    {
      name: "PROGRAMA SECTORIAL DE SALUD 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "11",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE SEGURIDAD PÚBLICA 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "12",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE MOVILIDAD Y TRANSPORTE 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "13",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE TURISMO SOSTENIBLE 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "14",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DEL TRABAJO Y LA PREVISIÓN SOCIAL 2023 - 2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "15",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO ECONÓMICO 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "16",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO MEDIO AMBIENTE Y RECURSOS NATURALES 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "17",
    },
    {
      name: "PROGRAMA SECTORIAL DE DESARROLLO DE INFRAESTRUCTURA PÚBLICA Y DESARROLLO URBANO SOSTENIBLE 2023-2028",
      types: ["Planes"],
      number: "2023",
      pokedexIndex: "18",
    },    
  ]
};

// Devuelve el nombre para encontrar la imagen de Pokémon.
export function resolveSrcName(name) {
  if (name.indexOf("Mega") > -1) {
    name = name.split(" ").slice(1);
    name[0] = name[0] + "-Mega";
    return name.join("_");
  }

  if (name.indexOf(" male") > -1 || name.indexOf(" female") > -1) {
    return name.split(" ")[0];
  }

  if (name === "Farfetch'd") {
    return "Farfetch_27d";
  }

  if (name.indexOf(" ") > -1) {
    return name.replace(" ", "_");
  }

  return name;
}
