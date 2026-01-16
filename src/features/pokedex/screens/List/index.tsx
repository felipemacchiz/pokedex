import TextInput from "@/components/TextInput";
import SelectBottomSheet, { type SelectOption } from "@/components/SelectBottomSheet";
import { useState } from "react";
import PokemonListCard from "./components/PokemonListCard";
import { usePokemonList } from "../../hooks/usePokemonList";
import { pokemonTypesSelectOptions } from "@/constants/pokemonTypes.constant";
import { pokemonListOrderByOptions } from "./constants/pokemonListOrderByOptions.constant";
import { useDebounce } from "use-debounce";
import Loading, { LoadingIcon } from "@/components/Loading";
import NotFound from "@/components/NotFound";
import Button from "@/components/Button";

const PokedexList = () => {
  const [pokemonTypeOption, setPokemonTypeOption] = useState<SelectOption>(pokemonTypesSelectOptions[0]);
  const [orderOption, setOrderOption] = useState<SelectOption>(pokemonListOrderByOptions[0]);

  const [search, setSearch] = useState('');
  const [debouncedSearch, { isPending: debouncedSearchIsPending }] = useDebounce(search, 1000);

  const {
    listData,
    listDetailed,
  } = usePokemonList({
    filters: {
      search: search ? debouncedSearch : '',
      type: pokemonTypeOption.value,
    },
    orderBy: orderOption.value,
  });

  const isLoading = listData.isPending || listDetailed.isPending;

  return (
    <div className="w-full h-dvh bg-white flex flex-col overflow-hidden">
      <div className="p-4 flex-none">
        <TextInput
          placeholder="Procurar Pókemon..."
          LeftIcon={<img src="/assets/Search.svg" />}
          value={search}
          onChange={(value) => setSearch(value)}
          RightIcon={search && debouncedSearchIsPending() ? (
            <LoadingIcon className="size-5" />
          ) : undefined}
        />
      </div>

      <div className="p-4 flex flex-col gap-4 flex-1 overflow-y-auto">
        <div className="flex items-center gap-4">
          <SelectBottomSheet
            title="Selecione o tipo"
            selectedOption={pokemonTypeOption}
            setSelectedOption={setPokemonTypeOption}
            options={pokemonTypesSelectOptions}
          />

          <SelectBottomSheet
            title="Selecione a ordem"
            selectedOption={orderOption}
            setSelectedOption={setOrderOption}
            options={pokemonListOrderByOptions}
          />
        </div>

        {!isLoading && Number(listDetailed.data?.length) > 0 && (
          <div className="flex flex-col gap-3">
            {listDetailed.data.map((pokemon) => (
              <PokemonListCard
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))}

            {listDetailed.hasNextPage && (
              <Button
                text="Carregar mais pokémons"
                onClick={() => listDetailed.fetchNextPage()}
                loading={listDetailed.isFetchingNextPage}
              />
            )}
          </div>
        )}

        {!isLoading && Number(listDetailed.data?.length) === 0 && (
          <NotFound>
            <div className="flex flex-col gap-2">
              {listDetailed.hasNextPage && (
                <Button
                  text="Carregar mais pokémons"
                  onClick={() => listDetailed.fetchNextPage()}
                  loading={listDetailed.isFetchingNextPage}
                />
              )}

              <Button
                text="Limpar filtros"
                onClick={() => {
                  setSearch('');
                  setPokemonTypeOption(pokemonTypesSelectOptions[0]);
                }}
              />
            </div>
          </NotFound>
        )}

        {isLoading && (
          <Loading className="h-full" />
        )}
      </div>
    </div>
  );
}

export default PokedexList;
