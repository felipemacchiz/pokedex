import { PokemonListOrderBy } from "@/features/pokedex/hooks/usePokemonList";

export const pokemonListOrderByOptions = [
  {
    value: PokemonListOrderBy.LowestId,
    label: 'Menor número',
  },
  {
    value: PokemonListOrderBy.HighestId,
    label: 'Maior número',
  },
  {
    value: PokemonListOrderBy.Alpha,
    label: 'A-Z',
  },
  {
    value: PokemonListOrderBy.AlphaReverse,
    label: 'Z-A',
  },
];
