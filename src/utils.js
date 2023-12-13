import { useCallback } from "react";

// Return the filter
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
 
// Lista de libros
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
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo, el cual se elabora de acuerdo a las prioridades del desarrollo integral del Estado fijadas en el Plan Estatal de Desarrollo o de acuerdo a las necesidades del desarrollo vinculadas a dos o más dependencias coordinadoras de sector, así como los que dicte el Poder Ejecutivo del Estado.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_ESPECIALES/DESPACHO_DEL_GOBERNADOR.pdf",
      "booksIndex": "1"
    },
    {
      "name": "Programa Especial de Desarrollo de Oficialía Mayor 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo, el cual se elabora de acuerdo a las prioridades del desarrollo integral del Estado fijadas en el Plan Estatal de Desarrollo o de acuerdo a las necesidades del desarrollo vinculadas a dos o más dependencias coordinadoras de sector, así como los que dicte el Poder Ejecutivo del Estado.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_ESPECIALES/Programa_Especial_de_Desarrollo_de_Oficialia_Mayor.pdf",
      "booksIndex": "2"
    },
    {
      "name": "Programa Especial de Desarrollo de Planeación y Prospectiva 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Programa enfocado a la prioridades de desarrollo integral de la Unidad de Planeación y Prospectiva, fijado en el Plan Estatal de Desarrollo.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_ESPECIALES/PROGRAMA_ESPECIAL_UPLAPH.pdf",
      "booksIndex": "3"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Gobierno 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/SECRETARIA_DE_GOBIERNO.pdf",
      "booksIndex": "4"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Hacienda 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarollo_de_Hacienda.pdf",
      "booksIndex": "5"
    },
    {
      "name": "Programa Sectorial de Desarrollo para el Bienestar e Inclusión Social 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Bienestar.pdf",
      "booksIndex": "6"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Infraestructura Pública y Desarrollo Urbano Sostenible 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_SIPDUS.pdf",
      "booksIndex": "7"
    },
    {
      "name": "Programa Sectorial de Desarrollo Económico 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_Economico_2023-2028.pdf",
      "booksIndex": "8"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Medio Ambiente y Recursos Naturales 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_Medio_Ambiente_y_Recursos_Naturales_2023-2028_.pdf",
      "booksIndex": "9"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Agricultura y Desarrollo Rural 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Agricultura.pdf",
      "booksIndex": "10"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Turismo Sostenible 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Turismo_Sostenible.pdf",
      "booksIndex": "11"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Contraloría 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Contraloria.pdf",
      "booksIndex": "12"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Educación 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Educacion.pdf",
      "booksIndex": "13"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Salud 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Salud.pdf",
      "booksIndex": "14"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Seguridad Pública 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Seguridad_Publica.pdf",
      "booksIndex": "15"
    },
    {
      "name": "Programa Sectorial de Desarrollo del Trabajo y la Previsión Social 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_del_Trabajo_y_la_Prevision_Social.pdf",
      "booksIndex": "16"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Movilidad y Transporte 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_SEMOT.pdf ",
      "booksIndex": "17"
    },
    {
      "name": "Programa Sectorial de Desarrollo de Cultura 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo elaborado por las dependencias coordinadoras de sector de la Administración Pública Estatal, en el cual se definen los objetivos, estrategias y acciones a realizar en cada sector para el desarrollo del Estado. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_SECTORIALES/Programa_Sectorial_de_Desarrollo_de_Cultura_2023-2028.pdf",
      "booksIndex": "18"
    },
    {
      "name": "Programa Especial de Desarrollo de\nProcuración de Justicia 2023 - 2028",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento de planeación de mediano plazo, el cual se elabora de acuerdo a las prioridades del desarrollo integral del Estado fijadas en el Plan Estatal de Desarrollo o de acuerdo a las necesidades del desarrollo vinculadas a dos o más dependencias coordinadoras de sector, así como los que dicte el Poder Ejecutivo del Estado.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PROGRAMAS_ESPECIALES/Programa_Especial_de_Desarrollo_de_Procuracion_de_Justicia.pdf",
      "booksIndex": "19"
    },
    {
      "name": "Plan Estatal de Desarrollo ",
      "types": [
        "planes"
      ],
      "year": "2022",
      "descriptionBook": "Documento rector de la planeación del Estado, en cual se establecen las directrices generales de política pública, las de carácter estratégico y la prospectiva que determinan la conducción del desarrollo integral de la entidad, tomando en consideración los propósitos y metas de la Planeación Nacional del Desarrollo.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/PLAN%20ESTATAL.pdf",
      "booksIndex": "20"
    },
    {
      "name": "Guía metodológica de Programas Sectoriales ",
      "types": [
        "guías"
      ],
      "year": "2022",
      "descriptionBook": "Documento técnico que especifica la metodología a seguir para la realización de los Programas Sectoriales y Especiales de Desarrollo por parte de las Dependencias de la Administración Pública Estatal. ",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/Metodologi%C3%ACa_Programas_Sectoriales_y_Especiales_GUI%C3%ACA_RA%C3%ACPIDA_ver2.pdf",
      "booksIndex": "21"
    },
    {
      "name": "Lineamientos para la actualización de los Planes Municipales de Desarrollo al 2024",
      "types": [
        "guías"
      ],
      "year": "2022",
      "descriptionBook": "Documento técnico que especifica la metodología a seguir para la realización de la actualización de los Planes Municipales de Desarrollo por parte de los municipios del Estado.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/guia-rapida-lineamientos.pdf",
      "booksIndex": "22"
    },
    {
      "name": "Guía metodológica para la elaboración de los Programas Institucionales de Desarrollo 2023 - 2028",
      "types": [
        "guías"
      ],
      "year": "2023",
      "descriptionBook": "Documento técnico que especifica la metodología a seguir para la realización de los Programas Institucionales de Desarrollo por parte de los Organismos Públicos Descentralizados.",
      "pdfSrc": "http://tenemosunacuerdo.hidalgo.gob.mx/pdf/2.-Guia-metodologica-para-la-elaboracion-de-los-PID.pptx.pdf",
      "booksIndex": "23"
    },
    {
      "name": "Plan Municipal de Desarrollo de Acatlán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Acatlan2020-2024.pdf",
      "booksIndex": "24"
    },
    {
      "name": "Plan Municipal de Desarrollo de Acaxochitlán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "https://acaxochitlanhgo.gob.mx/wp-content/uploads/2022/08/Plan-Municipal-de-Desarrollo-2021-2022_Acaxochitlan.pdf",
      "booksIndex": "25"
    },
    {
      "name": "Plan Municipal de Desarrollo de Actopan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Actopan2020-2024.pdf",
      "booksIndex": "26"
    },
    {
      "name": "Plan Municipal de Desarrollo de Agua Blanca de Iturbide",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_AguaBlancadeITurbide2020-2024.pdf",
      "booksIndex": "27"
    },
    {
      "name": "Plan Municipal de Desarrollo de Ajacuba",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Ajacuba2020-2024.pdf",
      "booksIndex": "28"
    },
    {
      "name": "Plan Municipal de Desarrollo de Alfajayucan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://alfajayucan.hidalgo.gob.mx/documentos/Plan%20Municipal%20de%20Desarrollo%202020-2024.pdf",
      "booksIndex": "29"
    },
    {
      "name": "Plan Municipal de Desarrollo de Almoloya",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://almoloya.hidalgo.gob.mx/descargables/transparencia/2dotrim21/obras/PMD.pdf",
      "booksIndex": "30"
    },
    {
      "name": "Plan Municipal de Desarrollo de Apan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "https://www.apan.gob.mx/descargables/transparencia_proactiva/Plan%20Municipal%20de%20Desarrollo.pdf",
      "booksIndex": "31"
    },
    {
      "name": "Plan Municipal de Desarrollo de El Arenal",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_ElArenal2020-2024.pdf",
      "booksIndex": "32"
    },
    {
      "name": "Plan Municipal de Desarrollo de Atitalaquia",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://www.atitalaquia.gob.mx/plan-municipal/plan-2020-2024.pdf",
      "booksIndex": "33"
    },
    {
      "name": "Plan Municipal de Desarrollo de Atlapexco",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "https://drive.google.com/file/d/1hxV3cWzzwFyvE0WuZ_2gy9WK7n_Ldma4/view",
      "booksIndex": "34"
    },
    {
      "name": "Plan Municipal de Desarrollo de Atotonilco el Grande",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "https://www.atotonilcoelgrande.gob.mx/wp-content/uploads/2021/06/Plan-Municipal-de-Desarrollo-Atotonilco-el-Grande-2020-2024-1-1.pdf",
      "booksIndex": "35"
    },
    {
      "name": "Plan Municipal de Desarrollo de Atotonilco de Tula",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "https://www.atotonilcodetula.gob.mx/wp-content/uploads/2021/08/3-PLAN_DE_DESARROLLO_MUNICIPAL_ATOTONILCO_-DE_TULA_2020-2024-3-1.pdf",
      "booksIndex": "36"
    },
    {
      "name": "Plan Municipal de Desarrollo de Calnali",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Calnali2020-2024.pdf",
      "booksIndex": "37"
    },
    {
      "name": "Plan Municipal de Desarrollo de Cardonal",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_ElCardonal2020-2024.pdf",
      "booksIndex": "38"
    },
    {
      "name": "Plan Municipal de Desarrollo de Cuautepec de Hinojosa",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_CuautepecdeHinojosa2020-2024.pdf",
      "booksIndex": "39"
    },
    {
      "name": "Plan Municipal de Desarrollo de Chapantongo",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://www.chapantongo.gob.mx/descargables/planeacion_y_capacitacion/2021/PDM2020-2024.pdf",
      "booksIndex": "40"
    },
    {
      "name": "Plan Municipal de Desarrollo de Chapulhuacán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Chapulhu%C3%A1can2020-2024.pdf",
      "booksIndex": "41"
    },
    {
      "name": "Plan Municipal de Desarrollo de Chilcuautla",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Chilcuautla2020-2024.pdf",
      "booksIndex": "42"
    },
    {
      "name": "Plan Municipal de Desarrollo de Eloxochitlán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Eloxochitlan2020-2024.pdf",
      "booksIndex": "43"
    },
    {
      "name": "Plan Municipal de Desarrollo de Emiliano Zapata",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_EmilianoZapata2020-2024.pdf",
      "booksIndex": "44"
    },
    {
      "name": "Plan Municipal de Desarrollo de Epazoyucan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Epazoyucan2020-2024.pdf",
      "booksIndex": "45"
    },
    {
      "name": "Plan Municipal de Desarrollo de Francisco I. Madero",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_FranciscoIMadero2020-2024.pdf",
      "booksIndex": "46"
    },
    {
      "name": "Plan Municipal de Desarrollo de Huasca de Ocampo",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_HuascadeOcampo2020-2024.pdf",
      "booksIndex": "47"
    },
    {
      "name": "Plan Municipal de Desarrollo de Huautla",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Huautla2020-2024.pdf",
      "booksIndex": "48"
    },
    {
      "name": "Plan Municipal de Desarrollo de Huazalingo",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Huazalingo2020-2024.pdf",
      "booksIndex": "49"
    },
    {
      "name": "Plan Municipal de Desarrollo de Huehuetla",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Huehuetla2020-2024.pdf",
      "booksIndex": "50"
    },
    {
      "name": "Plan Municipal de Desarrollo de Huejutla de Reyes",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_HuejutladeReyes2020-2024.pdf",
      "booksIndex": "51"
    },
    {
      "name": "Plan Municipal de Desarrollo de Huichapan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Huichapan2020-2024.pdf",
      "booksIndex": "52"
    },
    {
      "name": "Plan Municipal de Desarrollo de Ixmiquilpan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Ixmiquilpan2022-2024.pdf",
      "booksIndex": "53"
    },
    {
      "name": "Plan Municipal de Desarrollo de Jacala de Ledezma",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Jacala2020-2024.pdf",
      "booksIndex": "54"
    },
    {
      "name": "Plan Municipal de Desarrollo de Jaltocán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Jaltocan2020-2024.pdf",
      "booksIndex": "55"
    },
    {
      "name": "Plan Municipal de Desarrollo de Juárez Hidalgo",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_JuarezHidalgo2020-2024.pdf",
      "booksIndex": "56"
    },
    {
      "name": "Plan Municipal de Desarrollo de Lolotla",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Lolotla2020-2024.pdf",
      "booksIndex": "57"
    },
    {
      "name": "Plan Municipal de Desarrollo de Metepec",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Metepec2020-2024.pdf",
      "booksIndex": "58"
    },
    {
      "name": "Plan Municipal de Desarrollo de San Agustín Metzquititlán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_SanAgustinMetzquititlan2020-2024.pdf",
      "booksIndex": "59"
    },
    {
      "name": "Plan Municipal de Desarrollo de Metztitlán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Meztitlan2020-2024.pdf",
      "booksIndex": "60"
    },
    {
      "name": "Plan Municipal de Desarrollo de Mineral del Chico",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_MineraldelChico2020-2024.pdf",
      "booksIndex": "61"
    },
    {
      "name": "Plan Municipal de Desarrollo de Mineral del Monte",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_MineraldelMonte2020-2024.pdf",
      "booksIndex": "62"
    },
    {
      "name": "Plan Municipal de Desarrollo de La Misión",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_LaMision2020-2024.pdf",
      "booksIndex": "63"
    },
    {
      "name": "Plan Municipal de Desarrollo de Mixquiahuala de Juárez",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_MixquiahualadeJuarez2020-2024.pdf",
      "booksIndex": "64"
    },
    {
      "name": "Plan Municipal de Desarrollo de Molango de Escamilla",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_MolangodeEscamilla2020-2024.pdf",
      "booksIndex": "65"
    },
    {
      "name": "Plan Municipal de Desarrollo de Nicolás Flores",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_NicolasFlores2020-2024.pdf",
      "booksIndex": "66"
    },
    {
      "name": "Plan Municipal de Desarrollo de Nopala de Villagrán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_NopaladeVillagran2020-2024.pdf",
      "booksIndex": "67"
    },
    {
      "name": "Plan Municipal de Desarrollo de Omitlán de Juárez",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_OmitlandeJuarez2020-2024.pdf",
      "booksIndex": "68"
    },
    {
      "name": "Plan Municipal de Desarrollo de San Felipe Orizatlán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_SanFelipeOrizatlan2020-2024.pdf",
      "booksIndex": "69"
    },
    {
      "name": "Plan Municipal de Desarrollo de Pacula",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Pacula2020-2024.pdf",
      "booksIndex": "70"
    },
    {
      "name": "Plan Municipal de Desarrollo de Pachuca de Soto",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-5-del-15-de-junio-de-2021",
      "booksIndex": "71"
    },
    {
      "name": "Plan Municipal de Desarrollo de Pisaflores",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Pisaflores2020-2024.pdf",
      "booksIndex": "72"
    },
    {
      "name": "Plan Municipal de Desarrollo de Progreso de Obregón",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_ProgresodeObregon2020-2024.pdf",
      "booksIndex": "73"
    },
    {
      "name": "Plan Municipal de Desarrollo de Mineral de la Reforma",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-12-de-enero-de-2022",
      "booksIndex": "74"
    },
    {
      "name": "Plan Municipal de Desarrollo de San Agustín Tlaxiaca",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_SanAgustinTlaxiaca2020-2024.pdf",
      "booksIndex": "75"
    },
    {
      "name": "Plan Municipal de Desarrollo de San Bartolo Tutotepec",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_SanBartolotutotepec2020-2024.pdf",
      "booksIndex": "76"
    },
    {
      "name": "Plan Municipal de Desarrollo de San Salvador",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_SanSalvador2020-2024.pdf",
      "booksIndex": "77"
    },
    {
      "name": "Plan Municipal de Desarrollo de Santiago de Anaya",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_SantiagodeAnaya2020-2024.pdf",
      "booksIndex": "78"
    },
    {
      "name": "Plan Municipal de Desarrollo de Santiago Tulantepec de Lugo Guerrero",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_SantiagoTulantepec2020-2024.pdf",
      "booksIndex": "79"
    },
    {
      "name": "Plan Municipal de Desarrollo de Singuilucan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Singuilucan2020-2024.pdf",
      "booksIndex": "80"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tasquillo",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tasquillo2020-2024.pdf",
      "booksIndex": "81"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tecozautla",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tecozautla2020-2024.pdf",
      "booksIndex": "82"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tenango de Doria",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_TenangodeDoria2020-2024.pdf",
      "booksIndex": "83"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tepeapulco",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tepeapulco2020-2024.pdf",
      "booksIndex": "84"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tepehuacán de Guerrero",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_TepehuacandeGuerrero2020-2024.pdf",
      "booksIndex": "85"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tepeji del Río de Ocampo",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-3-del-06-de-julio-de-2021",
      "booksIndex": "86"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tepetitlán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tepetitlan2020-2024.pdf",
      "booksIndex": "87"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tetepango",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tetepango2020-2024.pdf",
      "booksIndex": "88"
    },
    {
      "name": "Plan Municipal de Desarrollo de Villa de Tezontepec",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_VilladeTenzontepec2020-2024.pdf",
      "booksIndex": "89"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tezontepec de Aldama",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tezontepec_de_Aldama2020-2024.pdf",
      "booksIndex": "90"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tianguistengo",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tianguistengo2020-2024.pdf",
      "booksIndex": "91"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tizayuca",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tizayuca2020-2024.pdf",
      "booksIndex": "92"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tlahuelilpan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tlahuelilpan2020-2024.pdf",
      "booksIndex": "93"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tlahuiltepa",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tlahuiltepa2020-2024.pdf",
      "booksIndex": "94"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tlanalapa",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tlanalapa2020-2024.pdf",
      "booksIndex": "95"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tlanchinol",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tlanchinol2020-2024.pdf",
      "booksIndex": "96"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tlaxcoapan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tlaxcoapan2020-2024.pdf",
      "booksIndex": "97"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tolcayuca",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tolcayuca2020-2024.pdf",
      "booksIndex": "98"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tula de Allende",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_TuladeAllende2020-2024.pdf",
      "booksIndex": "99"
    },
    {
      "name": "Plan Municipal de Desarrollo de Tulancingo de Bravo",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Tulancingo2020-2024.pdf",
      "booksIndex": "100"
    },
    {
      "name": "Plan Municipal de Desarrollo de Xochiatipan",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Xochiatipan2020-2024.pdf",
      "booksIndex": "101"
    },
    {
      "name": "Plan Municipal de Desarrollo de Xochicoatlán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Xochicoatlan2020-2024.pdf",
      "booksIndex": "102"
    },
    {
      "name": "Plan Municipal de Desarrollo de Yahualica",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Yahualica2020-2024.pdf",
      "booksIndex": "103"
    },
    {
      "name": "Plan Municipal de Desarrollo de Zacualtipán de Ángeles",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Zacualtipan2020-2024.pdf",
      "booksIndex": "104"
    },
    {
      "name": "Plan Municipal de Desarrollo de Zapotlán de Juárez",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_ZapotlandeJuarez2020-2024.pdf",
      "booksIndex": "105"
    },
    {
      "name": "Plan Municipal de Desarrollo de Zempoala",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Zempoala2020-2024.pdf",
      "booksIndex": "106"
    },
    {
      "name": "Plan Municipal de Desarrollo de Zimapán",
      "types": [
        "planes"
      ],
      "year": "2020",
      "descriptionBook": "Documento rector de la planeación en el municipio, el cual comprende el conjunto de la actividad económica, social y ambiental del Municipio, y es la guía de los programasque se generen en el Sistema Municipal de Planeación Democrática y que observará congruencia con los lineamientos señalados por el Plan Nacional de Desarrollo, el Plan Estatal de Desarrollo y el Programa Regional correspondiente.",
      "pdfSrc": "http://planestataldedesarrollo.hidalgo.gob.mx/pdf/PMD/2020-2024/PMD_Zimapan2020-2024.pdf",
      "booksIndex": "107"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Apan",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-2-del-06-de-diciembre-de-2022#",
      "booksIndex": "108"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Atitalaquia",
      "types": [
        "programas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-09-de-septiembre-de-2013",
      "booksIndex": "109"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Chapantongo",
      "types": [
        "programas"
      ],
      "year": "2011",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-bis-0-del-14-de-noviembre-de-2011",
      "booksIndex": "110"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Huasca de Ocampo",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-17-de-octubre-de-2022",
      "booksIndex": "111"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Huejutla de Reyes",
      "types": [
        "programas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=Periodico-Oficial-Alcance-1-del-01-de-mayo-de-2023",
      "booksIndex": "112"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Nopala de Villagrán",
      "types": [
        "programas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-09-de-septiembre-de-2013",
      "booksIndex": "113"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Omitlán de Juárez",
      "types": [
        "programas"
      ],
      "year": "2016",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-27-de-junio-de-2016",
      "booksIndex": "114"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Pachuca de Soto",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-1-del-21-de-noviembre-de-2022",
      "booksIndex": "115"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Mineral de la Reforma",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-4-del-01-de-septiembre-de-2022",
      "booksIndex": "116"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Tetepango",
      "types": [
        "programas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-1-del-09-de-septiembre-de-2013",
      "booksIndex": "117"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Villa de Tezontepec",
      "types": [
        "programas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-1-del-09-de-septiembre-de-2013",
      "booksIndex": "118"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Tezontepec de Aldama",
      "types": [
        "programas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-1-del-09-de-septiembre-de-2013",
      "booksIndex": "119"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Tizayuca",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-1-del-28-de-noviembre-de-2022",
      "booksIndex": "120"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Tlahuelilpan",
      "types": [
        "programas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-09-de-septiembre-de-2013",
      "booksIndex": "121"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Tolcayuca",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-30-de-agosto-de-2022",
      "booksIndex": "122"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Tula de Allende",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-20-de-diciembre-de-2022",
      "booksIndex": "123"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Tulancingo de Bravo",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-0-del-20-de-junio-de-2022",
      "booksIndex": "124"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Zapotlán de Juárez",
      "types": [
        "programas"
      ],
      "year": "2016",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-ordinario-0-del-18-de-enero-de-2016",
      "booksIndex": "125"
    },
    {
      "name": "Programa Municipal de Desarrollo Urbano de Zempoala",
      "types": [
        "programas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento técnico juridico, mediante el cual se establecen políticas, acciones y estrategias en beneficio de la utilización del suelo, dado que integra un inventario del territorio, con la finalidad de identificar las vocaciones del suelo y con ello implementar políticas que  garanticen  una correcta administración del suelo, asimismo define una cartera de proyectos estratégicos que permitirán atender las necesidades del municipio.",
      "pdfSrc": "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-alcance-6-del-02-de-septiembre-de-2022",
      "booksIndex": "126"
    },
    {
      "name": "Primer Informe de Gobierno",
      "types": [
        "informe"
      ],
      "year": "2023",
      "descriptionBook": "Documento que ofrece un balance del estado general que guarda la Administración Pública Estatal, así como, las acciones emprendidas en el primer año de gestión.",
      "pdfSrc": "https://primerinforme.hidalgo.gob.mx/assets/pdf/primer-informe-hidalgo-menchaca.pdf",
      "booksIndex": "127"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Actopan",
      "types": [
        "atlas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2013/13003_ACTOPAN_2013.PDF",
      "booksIndex": "128"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Almoloya",
      "types": [
        "atlas"
      ],
      "year": "2015",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2015/13007_ALMOLOYA_2015.PDF",
      "booksIndex": "129"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de El Arenal",
      "types": [
        "atlas"
      ],
      "year": "2020",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2020/13009_EL_ARENAL_2020.pdf",
      "booksIndex": "130"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Atitalaquia",
      "types": [
        "atlas"
      ],
      "year": "2020",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2020/13010_ATITALAQUIA_2020.PDF",
      "booksIndex": "131"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Atotonilco el Grande",
      "types": [
        "atlas"
      ],
      "year": "2015",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2015/13012_ATOTONILCO_EL_GRANDE_2015.PDF",
      "booksIndex": "132"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Cuautepec de Hinojosa",
      "types": [
        "atlas"
      ],
      "year": "2012",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2012/13016_CUAUTEPEC_HINOJOSA_2012.PDF",
      "booksIndex": "133"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Chilcuautla",
      "types": [
        "atlas"
      ],
      "year": "2016",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2016/13019_CHILCUAUTLA_HGO_2016.PDF",
      "booksIndex": "134"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Huasca de Ocampo",
      "types": [
        "atlas"
      ],
      "year": "2015",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2015/13024_HUASCA_DE_OCAMPO_2015.PDF",
      "booksIndex": "135"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Huehuetla",
      "types": [
        "atlas"
      ],
      "year": "2020",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2020/13027_HUEHUETLA_2020.PDF",
      "booksIndex": "136"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Huejutla de Reyes",
      "types": [
        "atlas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2013/13028_HUEJUTLA_REYES_2013.PDF",
      "booksIndex": "137"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Pachuca de Soto",
      "types": [
        "atlas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2022/13048_PACHUCA_2022.pdf",
      "booksIndex": "138"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Mineral de la Reforma",
      "types": [
        "atlas"
      ],
      "year": "2018",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2018/13051_MINERAL_DE_LA_REFORMA_2018.PDF",
      "booksIndex": "139"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de San Agustín Tlaxiaca",
      "types": [
        "atlas"
      ],
      "year": "2014",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2014/13052_SAN_AGUSTIN_TLAXIACA_2014.pdf",
      "booksIndex": "140"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tenango de Doria",
      "types": [
        "atlas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2013/13060_TENANGO_DORIA_2013.PDF",
      "booksIndex": "141"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tepehuacán de Guerrero",
      "types": [
        "atlas"
      ],
      "year": "2022",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2022/13062_TEPEHUACAN_GUERRERO_2022.pdf",
      "booksIndex": "142"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tepeji del Río de Ocampo",
      "types": [
        "atlas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2023/13063_TEPEJI_RIO_2023.pdf",
      "booksIndex": "143"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tepetitlán",
      "types": [
        "atlas"
      ],
      "year": "2020",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2020/13064_TEPETITLAN_2020.PDF",
      "booksIndex": "144"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tetepango",
      "types": [
        "atlas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2023/13065_TETEPANGO_2023.pdf",
      "booksIndex": "145"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Villa de Tezontepec",
      "types": [
        "atlas"
      ],
      "year": "2013",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2013/13066_VILLA_TEZONTEPEC_2013.PDF",
      "booksIndex": "146"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tezontepec de Aldama",
      "types": [
        "atlas"
      ],
      "year": "2014",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2014/13067_TEZONTEPEC_DE_ALDAMA_2014.PDF",
      "booksIndex": "147"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tizayuca",
      "types": [
        "atlas"
      ],
      "year": "2020",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2020/13069_TIZAYUCA_2020.PDF",
      "booksIndex": "148"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tlahuelilpan",
      "types": [
        "atlas"
      ],
      "year": "2020",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2020/13070_TLAHUELILPAN_2020.PDF",
      "booksIndex": "149"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tlanchinol",
      "types": [
        "atlas"
      ],
      "year": "2020",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2020/13073_TLANCHINOL_2020.pdf",
      "booksIndex": "150"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tlaxcoapan",
      "types": [
        "atlas"
      ],
      "year": "2011",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2011/13074_TLAXCOAPAN_2011.PDF",
      "booksIndex": "151"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tula de Allende",
      "types": [
        "atlas"
      ],
      "year": "2023",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2023/13076_TULA_ALLENDE_2023.pdf",
      "booksIndex": "152"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Tulancingo de Bravo",
      "types": [
        "atlas"
      ],
      "year": "2017",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2017/13077_TULANCINGO_HGO_2017.PDF",
      "booksIndex": "153"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Xochiatipan",
      "types": [
        "atlas"
      ],
      "year": "2020",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2020/13078_XOCHIATIPAN_2020.PDF",
      "booksIndex": "154"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Zapotlán de Juárez",
      "types": [
        "atlas"
      ],
      "year": "2014",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2014/13082_ZAPOTLAN_DE_JUAREZ_2014.PDF",
      "booksIndex": "155"
    },
    {
      "name": "Atlas de Riesgos Naturales del Municipio de Zimapán",
      "types": [
        "atlas"
      ],
      "year": "2016",
      "descriptionBook": "Instrumento para entender los peligros del municipio, facilitando la planeación del desarrollo seguro y tomando decisiones informadas para reducir riesgos de desastres y proteger comunidades e infraestructuras.",
      "pdfSrc": "http://rmgir.proyectomesoamerica.org/AtlasMunPDF/2016/13084_ZIMAPAN_HGO_2016.PDF",
      "booksIndex": "156"
    }
  ]
};


