// tests/test_BDD/support/world.ts
import { setWorldConstructor } from '@cucumber/cucumber';
import type { APIRequestContext, APIResponse } from '@playwright/test';
import type { PokemonService } from '../../../src/services/pokemon.service.ts';

export class CustomWorld {
    request?: APIRequestContext;
    pokemonService?: PokemonService;
    response?: APIResponse;
}

setWorldConstructor(CustomWorld);
