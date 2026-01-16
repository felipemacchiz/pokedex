import { useInfiniteQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";
import type { PokemonData, PokemonListApiResponse } from "../types/pokemon.type";

export const PokemonListOrderBy = {
  Alpha: 'alpha',
  AlphaReverse: 'alpha-reverse',
  LowestId: 'lowest-id',
  HighestId: 'highest-id',
}

export type PokemonListOrderBy = typeof PokemonListOrderBy[keyof typeof PokemonListOrderBy];

export type UsePokemonListParams = {
  filters?: {
    search?: string;
    type?: string;
  };
  orderBy?: PokemonListOrderBy;
}

export const usePokemonList = ({
  filters,
  orderBy,
}: UsePokemonListParams) => {
  const listDataQuery = useInfiniteQuery<PokemonListApiResponse>({
    queryKey: ['pokemonList'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageParam}`
      );

      return response.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) {
        return undefined
      };

      const url = new URL(lastPage.next);
      const offset = url.searchParams.get('offset');
      return offset ? Number(offset) : undefined;
    },
    staleTime: Infinity,
  });

  const allPokemonBasics = listDataQuery.data?.pages.flatMap((page) => page.results) ?? [];

  const listDetailedQueries = useQueries({
    queries: allPokemonBasics.map((pokemon) => ({
      queryKey: ['pokemonListDetail', pokemon.name],
      queryFn: async (): Promise<PokemonData> => {
        const response = await axios.get(pokemon.url);

        return response.data;
      },
      enabled: !!listDataQuery.isSuccess,
      staleTime: Infinity,
    })),
    combine: (results) => {
      const allPokemon = results
        .map((res) => res.data)
        .filter((p): p is PokemonData => !!p);

      const filtered = !filters?.search && !filters?.type
        ? allPokemon
        : allPokemon.filter((p) => {
          const matchesSearch = !filters?.search || p.name.toLowerCase().includes(filters.search.toLowerCase());
          const matchesType = !filters?.type || p.types.some(t => t.type.name === filters.type);
          return matchesSearch && matchesType;
        });

      filtered.sort((a, b) => {
        switch (orderBy) {
          case PokemonListOrderBy.Alpha: return a.name.localeCompare(b.name);
          case PokemonListOrderBy.AlphaReverse: return b.name.localeCompare(a.name);
          case PokemonListOrderBy.LowestId: return a.id - b.id;
          case PokemonListOrderBy.HighestId: return b.id - a.id;
          default: return 0;
        }
      });

      return {
        data: filtered,
        isPending: results.some((res) => res.isPending),
        isLoading: results.some((res) => res.isLoading),
        isFetchingNextPage: listDataQuery.isFetchingNextPage,
        hasNextPage: listDataQuery.hasNextPage,
        fetchNextPage: listDataQuery.fetchNextPage,
      };
    },
  });

  return {
    listData: listDataQuery,
    listDetailed: listDetailedQueries,
  };
}
