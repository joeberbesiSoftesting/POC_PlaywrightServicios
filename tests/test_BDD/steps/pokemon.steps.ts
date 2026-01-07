import { Given, When, Then } from '@cucumber/cucumber';
import { expect, request as playwrightRequest } from '@playwright/test';
import { PokemonService } from '../../../src/services/pokemon.service.ts';
import type { CustomWorld } from '../support/world.ts';

Given('que tengo acceso al servicio de Pokémon', async function (this: CustomWorld) {

    this.request = await playwrightRequest.newContext({
        baseURL: 'https://pokeapi.co/api/',
    });

    // Se crea el service una sola vez y lo guarda en el World
    this.pokemonService = new PokemonService(this.request);
    });

    When('consulto el Pokémon {string}', async function (this: CustomWorld, name: string) {
    this.response = await this.pokemonService!.getPokemon(name);
    });

    When(
    'consulto el listado de Pokémon con límite {int} y offset {int}',
    async function (this: CustomWorld, limit: number, offset: number) {
        this.response = await this.pokemonService!.listPokemon(limit, offset);
    }
    );

    Then('el servicio responde con estado {int}', async function (this: CustomWorld, statusCode: number) {
    expect(this.response!.status()).toBe(statusCode);
    });

    Then('el Pokémon tiene id y nombre', async function (this: CustomWorld) {
    const body = await this.response!.json();
    expect(typeof body.id).toBe('number');
    expect(typeof body.name).toBe('string');
    });

    Then('el servicio devuelve un mensaje de error', async function (this: CustomWorld) {
    const contentType = this.response!.headers()['content-type'] ?? '';

    if (contentType.includes('application/json')) {
        const body = await this.response!.json();
        expect(body).toHaveProperty('detail');
    } else {
        const text = await this.response!.text();
        expect(text.toLowerCase()).toContain('not');
    }
    });

    Then('se devuelve un listado de 10 Pokémon', async function (this: CustomWorld) {
    const body = await this.response!.json();
    expect(Array.isArray(body.results)).toBeTruthy();
    expect(body.results.length).toBe(10);

    expect(body.results[0]).toHaveProperty('name');
    expect(body.results[0]).toHaveProperty('url');
});
