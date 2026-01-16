import { type PokemonEvolutionData } from './../types/pokemon.type';
import { useQueries } from "@tanstack/react-query"
import axios from "axios";
import type { PokemonData, PokemonSpecieData } from "../types/pokemon.type";

export const usePokemonGetByName = (name?: string) => {
  return useQueries({
    queries: [
      {
        queryKey: ['pokemon-basic', name],
        queryFn: (): Promise<PokemonData> => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.data),
        enabled: !!name,
        staleTime: Infinity,
        retry: false,
      },
      {
        queryKey: ['pokemon-species', name],
        queryFn: async () => {
          const speciesData: PokemonSpecieData = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`).then(res => res.data);
          const evolutionUrl = speciesData.evolution_chain.url;

          let evolutionData: PokemonEvolutionData | null = null;

          if (evolutionUrl) {
            evolutionData = await axios.get(evolutionUrl).then(res => res.data);
          }

          return {
            base: speciesData,
            evolution: evolutionData,
          }
        },
        enabled: !!name,
        staleTime: Infinity,
        retry: false,
      },
    ],
    combine: (results) => {
      const [basic, species] = results;

      return {
        data: {
          base: basic.data,
          species: species.data,
        },
        isLoading: results.some((r) => r.isLoading),
        isError: results.some((r) => r.isError),
      };
    },
  });
}
