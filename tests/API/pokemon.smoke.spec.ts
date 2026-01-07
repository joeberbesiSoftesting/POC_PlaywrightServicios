import { test, expect } from '@playwright/test';
import { PokemonService } from '../../src/services/pokemon.service';

test('GET /pokemon/ditto retorna 200 y datos básicos', async ({ request }) => {
    const pokemonService = new PokemonService(request);

    // console.log('url final:', response.url());
    // console.log('status:', response.status());
    const response = await pokemonService.getPokemon('ditto');
    expect(response.status()).toBe(200);

    const body = await response.json();


    // Identidad (contrato mínimo)
    expect(body.id).toBe(132);
    expect(body.name).toBe('ditto');

    expect(Array.isArray(body.abilities)).toBeTruthy();
    expect(Array.isArray(body.types)).toBeTruthy();
});

test('GET /pokemon?limit=10&offset=0 retorna listado paginado', async ({ request }) => {
  const pokemonService = new PokemonService(request);
  const response = await pokemonService.listPokemon(10, 0);
  expect(response.status()).toBe(200);

  const body = await response.json();

  // Señales de "listado paginado"
  expect(typeof body.count).toBe('number');
  expect(body.next).toContain('offset=10');
  expect(body.previous).toBeNull();

  // results debe ser array de 10 elementos
  expect(Array.isArray(body.results)).toBeTruthy();
  expect(body.results.length).toBe(10);

  // cada item suele traer name + url
  expect(body.results[0]).toHaveProperty('name');
  expect(body.results[0]).toHaveProperty('url');
});

test('GET /pokemon/{inexistente} retorna 404 y body de error', async ({ request }) => {
  const pokemonService = new PokemonService(request);
  const response = await pokemonService.getPokemon('ditto-no-existe-999');
  expect(response.status()).toBe(404);

  const contentType = response.headers()['content-type'] ?? '';

  if (contentType.includes('application/json')) {
    const body = await response.json();
    expect(body).toHaveProperty('detail');
  } else {
    const text = await response.text();
    expect(text.toLowerCase()).toContain('not');
  }
});
