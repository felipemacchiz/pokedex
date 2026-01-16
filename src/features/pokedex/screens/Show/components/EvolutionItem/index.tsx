import Loading from "@/components/Loading";
import { pokemonTypes } from "@/constants/pokemonTypes.constant";
import { usePokemonGetByName } from "@/features/pokedex/hooks/usePokemonGetById";
import type { PokemonEvolutionChainData } from "@/features/pokedex/types/pokemon.type";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { twMerge } from "tailwind-merge";

type EvolutionItemProps = {
  chain: PokemonEvolutionChainData;
}

const EvolutionItem = ({ chain }: EvolutionItemProps) => {
  const navigate = useNavigate();

  const { name } = useParams();

  const {
    data: pokemon,
    isLoading,
  } = usePokemonGetByName(chain.species.name);

  const mainPokemonType = pokemon?.base?.types?.[0];

  const mainPokemonTypeData = useMemo(() => {
    return mainPokemonType && pokemonTypes[mainPokemonType.type.name as keyof typeof pokemonTypes];
  }, [mainPokemonType]);

  if (isLoading) {
    return (
      <Loading className="h-50" />
    );
  }

  return (
    <>
      {!!chain.evolution_details?.[0]?.min_level && (
        <div className="flex items-center justify-center py-2">
          <img src="/assets/ArrowDownThick.svg" />

          <p className="text-[#173EA5] text-base font-medium">
            Nível {chain.evolution_details?.[0]?.min_level}
          </p>
        </div>
      )}

      <button
        className={twMerge(
          'w-full flex items-center rounded-full border border-pk-gray-100 overflow-hidden enabled:cursor-pointer enabled:transition-colors enabled:hover:bg-pk-gray-50',
        )}
        onClick={() => {
          navigate(`/pokemon/${chain.species.name}`);
          window.scrollTo(0, 0);
        }}
        disabled={name == chain.species.name}
      >
        <div className={twMerge('w-28 min-h-18.5 rounded-full flex items-center justify-center', mainPokemonTypeData?.className)}>
          <img
            src={pokemon.base?.sprites.front_default || undefined}
            className="object-contain"
          />
        </div>

        <div className="pl-3 pr-12 flex-1 flex flex-col items-start gap-1">
          <div className="flex flex-col items-start">
            <p className="capitalize text-pk-gray-900 text-base">
              {pokemon.base?.name}
            </p>

            <p className="text-xs text-pk-gray-700 font-medium">
              Nº{pokemon?.base?.id.toString().padStart(3, '0')}
            </p>
          </div>

          <div className="flex items-center w-full py-1 gap-1">
            {pokemon.base?.types.map((pokemonType) => (
              <div
                key={pokemonType.type.name}
                className={twMerge(
                  'bg-pk-gray-300 rounded-full flex items-center justify-center w-full p-0.75',
                  `bg-element-${pokemonType.type.name}`,
                )}
              >
                <div className={twMerge(
                  'rounded-full bg-white flex items-center justify-center p-0.5',
                )}>
                  <img
                    src={pokemonTypes[pokemonType.type.name as keyof typeof pokemonTypes].icon}
                    className="size-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </button>

      {!!chain.evolves_to[0] && (
        <EvolutionItem
          chain={chain.evolves_to[0]}
        />
      )}
    </>
  );
}

export default EvolutionItem;
