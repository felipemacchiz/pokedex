import { useNavigate, useParams } from "react-router";
import { usePokemonGetByName } from "../../hooks/usePokemonGetById";
import { pokemonTypes } from "@/constants/pokemonTypes.constant";
import { twMerge } from "tailwind-merge";
import { useMemo } from "react";
import ChevronLeftIcon from "@/components/ChevronLeftIcon";
import HeartIcon from "@/components/HeartIcon";
import PokemonTypeBadge from "../../components/PokemonTypeBadge";
import DisplayField from "@/components/DisplayField";
import { formatDecimal } from "@/utils/formatters";
import EvolutionItem from "./components/EvolutionItem";
import Loading from "@/components/Loading";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import NotFound from "@/components/NotFound";
import Button from "@/components/Button";

const PokedexShow = () => {
  const { name } = useParams();

  const navigate = useNavigate();

  const {
    favorites,
    toggleFavorite,
  } = useFavoritesStore();

  const {
    data: pokemon,
    isLoading,
    isError,
  } = usePokemonGetByName(name);

  const mainPokemonType = pokemon?.base?.types?.[0];

  const mainPokemonTypeData = useMemo(() => {
    return mainPokemonType && pokemonTypes[mainPokemonType.type.name as keyof typeof pokemonTypes];
  }, [mainPokemonType]);

  const pokemonGenderMaleRate = useMemo(() => {
    return (8 - Number(pokemon.species?.base?.gender_rate)) / 8;
  }, [isLoading]);

  if (isLoading) {
    return (
      <Loading className="w-full h-dvh" />
    );
  }

  if (isError) {
    return (
      <NotFound className="h-dvh">
        <div>
          <Button
            text="Voltar para listagem de pokemons"
            onClick={() => navigate('/')}
          />
        </div>
      </NotFound>
    )
  }

  return (
    <div className="w-full h-dvh bg-white flex flex-col gap-4">
      <div className={twMerge(
        "bg-pk-gray-400 relative flex flex-col h-56",
        mainPokemonTypeData?.className,
      )}>
        <div className="flex items-center justify-between p-4">
          <button
            className="size-7 place-items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>

          <button
            className="size-7 place-items-center cursor-pointer"
            onClick={() => name && toggleFavorite(name)}
            disabled={!name}
          >
            <HeartIcon
              className={twMerge(
                name && favorites.includes(name) && 'fill-[#FD525C] text-transparent'
              )}
            />
          </button>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={mainPokemonTypeData?.outline}
            className="h-[80%] top-1/2 -translate-y-1/2 object-contain opacity-75 absolute mask-[linear-gradient(to_bottom,black_0%,transparent_100%)]"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src={pokemon?.base?.sprites.other.showdown.front_default || undefined}
            alt={pokemon?.base?.name}
            className="size-40 object-contain z-10 mt-10"
          />
        </div>
      </div>

      <div className="flex flex-col mt-10 p-4 gap-6">
        <div className="flex flex-col">
          <h1 className="capitalize text-3xl font-medium text-black">
            {pokemon?.base?.name}
          </h1>

          <h2 className="text-base font-medium text-black/70">
            Nº{pokemon?.base?.id.toString().padStart(3, '0')}
          </h2>
        </div>

        <div className="flex items-center gap-1">
          {pokemon?.base?.types.map((t: any) => (
            <PokemonTypeBadge
              key={t.type.name}
              pokemonType={t}
              size="medium"
            />
          ))}
        </div>

        <div>
          <p className="text-black/70 text-sm">
            {pokemon.species?.base?.flavor_text_entries?.[0]?.flavor_text}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <DisplayField
            label="Peso"
            LabelIcon={<img src="/assets/Weight.svg" className="size-4" />}
            value={pokemon?.base?.weight ? `${formatDecimal(pokemon?.base?.weight / 10)} kg` : '--'}
          />

          <DisplayField
            label="Altura"
            LabelIcon={<img src="/assets/Height.svg" className="size-4" />}
            value={pokemon?.base?.height ? `${formatDecimal(pokemon?.base?.height / 10)} m` : '--'}
          />

          <DisplayField
            label="Categoria"
            LabelIcon={<img src="/assets/Weight.svg" className="size-4" />}
            value={pokemon?.base?.weight.toString() || '--'}
          />

          <DisplayField
            label="Habilidade"
            LabelIcon={<img src="/assets/Pokeball.svg" className="size-4" />}
            value={pokemon?.base?.abilities?.[0].ability.name || '--'}
            valueClassName="capitalize"
          />
        </div>

        {pokemon.species?.base?.gender_rate !== undefined && (
          <div>
            <div className="flex flex-col gap-3">
              <p className="uppercase font-medium text-xs text-black/70 text-center">
                Gênero
              </p>

              <div className="flex flex-col gap-1.5">
                <div className={twMerge(
                  'rounded-full overflow-hidden h-2 flex items-stretch',
                  Number(pokemon?.species?.base?.gender_rate) < 0 && 'border border-black/10',
                )}>
                  {Number(pokemon?.species?.base?.gender_rate) >= 0 && (
                    <>
                      <div className="bg-[#2551C3]" style={{ width: pokemonGenderMaleRate * 100 + '%' }} />

                      <div className="flex-1 bg-[#FF7596]" />
                    </>
                  )}
                </div>

                {Number(pokemon.species?.base?.gender_rate) >= 0 ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.75">
                      <img src="/assets/Male.svg" className="size-4.5" />

                      <p className="font-medium text-xs text-black/70">
                        {formatDecimal(pokemonGenderMaleRate * 100, 0, 1)} %
                      </p>
                    </div>

                    <div className="flex items-center gap-0.75">
                      <img src="/assets/Female.svg" className="size-4.5" />

                      <p className="font-medium text-xs text-black/70">
                        {formatDecimal((1 - pokemonGenderMaleRate) * 100, 0, 1)} %
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <p className="font-medium text-xs text-black/70 uppercase">
                      Desconhecido
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {pokemon.species?.evolution && (
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-black text-lg">
              Evoluções
            </h3>

            <div className="border border-pk-gray-100 rounded-2xl flex-col gap-2 px-4 py-6">
              <EvolutionItem chain={pokemon.species?.evolution?.chain} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokedexShow;
