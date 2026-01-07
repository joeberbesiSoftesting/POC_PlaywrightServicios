import { APIRequestContext } from '@playwright/test';

export class PokemonService {
    constructor(private request: APIRequestContext) {}

    getPokemon(name: string) {
        return this.request.get(`v2/pokemon/${name}`);
    }

    listPokemon(limit = 10, offset = 0) {
        return this.request.get(`v2/pokemon?limit=${limit}&offset=${offset}`);
    }

}
