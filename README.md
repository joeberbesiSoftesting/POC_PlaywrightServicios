POC – Pruebas de Servicios con Playwright y BDD
Descripción

Este proyecto es una Prueba de Concepto (POC) orientada a la automatización de servicios REST utilizando Playwright y BDD con Cucumber sobre la PokeAPI.
El objetivo principal es demostrar cómo estructurar pruebas técnicas y funcionales de APIs de forma profesional, mantenible y entendible tanto para equipos técnicos como de negocio.

La POC combina:

Pruebas técnicas directas con Playwright.

Pruebas BDD usando escenarios Given / When / Then.

Separación de responsabilidades mediante una capa de servicios.

Generación de reportes técnicos y funcionales en HTML.

Objetivos

Automatizar pruebas de servicios REST utilizando Playwright.

Aplicar BDD (Given / When / Then) para definir escenarios comprensibles por negocio y QA.

Separar la lógica de consumo del API en una capa de servicios reutilizable.

Validar contratos mínimos de respuesta sin depender de JSONs completos.

Generar reportes técnicos y funcionales en HTML.

Demostrar una estructura realista utilizada en proyectos profesionales de QA Automation.

Tecnologías Utilizadas

Playwright

Cucumber (BDD)

TypeScript

Node.js

PokeAPI (API pública)

Tipos de Pruebas Implementadas
Pruebas Técnicas (Playwright)

Validación de códigos de estado HTTP.

Validación de estructura mínima del JSON.

Pruebas de endpoints exitosos y de error (404).

Pruebas de paginación.

Pruebas Funcionales (BDD)

Escenarios definidos en lenguaje natural.

Validación del comportamiento del servicio desde la perspectiva de negocio.

Uso de Given / When / Then desacoplado de la lógica técnica.

Ejecución de Pruebas
Pruebas Técnicas con Playwright
npx playwright test

Ver reporte técnico:

npx playwright show-report

Pruebas BDD con Cucumber

Ejecutar escenarios BDD:

$env:TS_NODE_PROJECT="tsconfig.cucumber.json"
npx cucumber-js


Generar reporte JSON:

npx cucumber-js --format json:reports/cucumber-report.json


Generar reporte HTML:

node generate-report.js


Abrir reporte BDD:

reports/cucumber-report.html

Reportes

Reporte Técnico (Playwright):

Ubicación: playwright-report/index.html

Enfocado en ejecución técnica y debugging.

Reporte Funcional (Cucumber):

Ubicación: reports/cucumber-report.html

Enfocado en escenarios BDD y validación funcional.

Ambos reportes son independientes y complementarios.