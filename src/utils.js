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
export const datosBibliotecaDigital = {
  cardInfo: ["Categoría ", "Abecedario", "year"],
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
      "name": "Programa Especial de Desarrollo de la Secretaría del Despacho de la Persona Titular del Poder Ejecutivo 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡AquíPrograma enfocado a la prioridades de desarrollo integral de la Secretaría del Despacho de la Persona Titular del Poder ejecutivo, fijado en el Plan Estatal de Desarrollo.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_ESPECIALES/DESPACHO_DEL_GOBERNADOR.pdf",
      "booksIndex": 1
    },
    {
      "name": "Programa Especial de Desarrollo de Oficialía Mayor 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "Programa enfocado a la prioridades de desarrollo integral de la Secretaría del Oficialía Mayor, fijado en el Plan Estatal de Desarrollo.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_ESPECIALES/Programa_Especial_de_Desarrollo_de_Oficialia_Mayor.pdf",
      "booksIndex": 2
    },
    {
      "name": "Programa Especial de Desarrollo de Planeación y Prospectiva 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "Programa enfocado a la prioridades de desarrollo integral de la Unidad de Planeación y Prospectiva, fijado en el Plan Estatal de Desarrollo.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_ESPECIALES/PROGRAMA_ESPECIAL_UPLAPH.pdf",
      "booksIndex": 3
    },
    {
      "name": "Programa Sectorial de Desarrollo de Gobierno 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/SECRETARIA_DE_GOBIERNO.pdf",
      "booksIndex": 4
    },
    {
      "name": "Programa Sectorial de Desarrollo de Hacienda 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarollo_de_Hacienda.pdf",
      "booksIndex": 5
    },
    {
      "name": "Programa Sectorial de Desarrollo para el Bienestar e Inclusión Social 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Bienestar.pdf",
      "booksIndex": 6
    },
    {
      "name": "Programa Sectorial de Desarrollo de Infraestructura Pública y Desarrollo Urbano Sostenible 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_SIPDUS.pdf",
      "booksIndex": 7
    },
    {
      "name": "Programa Sectorial de Desarrollo Económico 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_Economico_2023-2028.pdf",
      "booksIndex": 8
    },
    {
      "name": "Programa Sectorial de Desarrollo de Medio Ambiente y Recursos Naturales 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_Medio_Ambiente_y_Recursos_Naturales_2023-2028_.pdf",
      "booksIndex": 9
    },
    {
      "name": "Programa Sectorial de Desarrollo de Agricultura y Desarrollo Rural 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Agricultura.pdf",
      "booksIndex": 10
    },
    {
      "name": "Programa Sectorial de Desarrollo de Turismo Sostenible 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Turismo_Sostenible.pdf",
      "booksIndex": 11
    },
    {
      "name": "Programa Sectorial de Desarrollo de Contraloría 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Contraloria.pdf",
      "booksIndex": 12
    },
    {
      "name": "Programa Sectorial de Desarrollo de Educación 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Educacion.pdf",
      "booksIndex": 13
    },
    {
      "name": "Programa Sectorial de Desarrollo de Salud 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Salud.pdf",
      "booksIndex": 14
    },
    {
      "name": "Programa Sectorial de Desarrollo de Seguridad Pública 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Seguridad_Publica.pdf",
      "booksIndex": 15
    },
    {
      "name": "Programa Sectorial de Desarrollo del Trabajo y la Previsión Social 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_del_Trabajo_y_la_Prevision_Social.pdf",
      "booksIndex": 16
    },
    {
      "name": "Programa Sectorial de Desarrollo de Movilidad y Transporte 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_SEMOT.pdf",
      "booksIndex": 17
    },
    {
      "name": "Programa Sectorial de Desarrollo de Cultura 2023 - 2028",
      "types": ["programas"],
      "year": "2023",
      "descriptionBook": "¡Aquí va la descripción espera!",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Cultura_2023-2028.pdf",
      "booksIndex": 18
    },
  ]
};


