import { twMerge } from "tailwind-merge";
import PokemonTypeBadge from "../../../../components/PokemonTypeBadge";
import type { PokemonData } from "@/features/pokedex/types/pokemon.type";
import { pokemonTypes } from "@/constants/pokemonTypes.constant";
import { useNavigate } from "react-router";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import HeartIcon from "@/components/HeartIcon";

type PokemonListCardProps = {
  pokemon: PokemonData;
}

const PokemonListCard = ({ pokemon }: PokemonListCardProps) => {
  const navigate = useNavigate();

  const {
    favorites,
    toggleFavorite,
  } = useFavoritesStore();

  const mainPokemonType = pokemon.types[0];
  const mainPokemonTypeData = pokemonTypes[mainPokemonType.type.name as keyof typeof pokemonTypes];

  return (
    <div
      className={twMerge(
        "flex bg-pk-gray-50 hover:bg-pk-gray-100 transition-colors rounded-2xl overflow-hidden cursor-pointer",
      )}
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
    >
      <div className="flex flex-col px-4 py-3 flex-1 gap-1">
        <div>
          <div>
            <p className="text-xs text-pk-gray-800 font-semibold">
              Nº{pokemon.id.toString().padStart(3, '0')}
            </p>
          </div>

          <div>
            <p className="text-xl text-black font-semibold capitalize">
              {pokemon.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {pokemon.types.map((t: any) => (
            <PokemonTypeBadge
              key={t.type.name}
              pokemonType={t}
              size="small"
            />
          ))}
        </div>
      </div>

      <div className={twMerge(
        'place-items-center w-32 rounded-2xl bg-pk-gray-300 relative',
        mainPokemonTypeData.className
      )}>
        <img
          src={pokemon.sprites.front_default || undefined}
          alt={pokemon.name}
          style={{ width: '100px' }}
        />

        <button
          className="absolute top-1.5 right-1.5 size-7 rounded-full border-2 border-white backdrop-blur-2xl bg-black/30 flex items-center justify-center cursor-pointer"
          onClick={(event) => {
            event.stopPropagation();

            toggleFavorite(pokemon.name);
          }}
        >
          <HeartIcon
            className={twMerge(
              'size-4',
              favorites.includes(pokemon.name) && 'fill-[#FD525C] text-transparent'
            )}
          />
        </button>
      </div>
    </div>
  );
}

export default PokemonListCard;
