Feature: Consulta de Pokémon
  Como consumidor del servicio PokeAPI
  Quiero consultar información de Pokémon
  Para validar que el servicio responde correctamente

  Scenario: Obtener información básica de un Pokémon existente
    Given que tengo acceso al servicio de Pokémon
    When consulto el Pokémon "ditto"
    Then el servicio responde con estado 200
    And el Pokémon tiene id y nombre

  Scenario: Consultar un Pokémon inexistente
    Given que tengo acceso al servicio de Pokémon
    When consulto el Pokémon "ditto-no-existe-999"
    Then el servicio responde con estado 404
    And el servicio devuelve un mensaje de error

  Scenario: Obtener listado paginado de Pokémon
    Given que tengo acceso al servicio de Pokémon
    When consulto el listado de Pokémon con límite 10 y offset 0
    Then el servicio responde con estado 200
    And se devuelve un listado de 10 Pokémon
