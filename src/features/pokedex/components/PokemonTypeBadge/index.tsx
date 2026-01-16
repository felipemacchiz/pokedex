import { pokemonTypes } from "@/constants/pokemonTypes.constant";
import type { PokemonTypeData } from "@/features/pokedex/types/pokemon.type";
import { twMerge } from "tailwind-merge";

type PokemonTypeBadgeProps = {
  pokemonType: PokemonTypeData;
  size: 'small' | 'medium';
}

const PokemonTypeBadge = ({
  pokemonType,
  size,
}: PokemonTypeBadgeProps) => {
  const pokemonTypeData = pokemonTypes[pokemonType.type.name as keyof typeof pokemonTypes];

  return (
    <div
      key={pokemonType.type.name}
      className={twMerge(
        'bg-pk-gray-300 rounded-full flex items-center gap-1',
        `bg-element-${pokemonType.type.name}`,
        size === 'small' && 'px-1.5 py-0.75',
        size === 'medium' && 'px-3.5 py-1',
      )}
    >
      <div className={twMerge(
        'rounded-full bg-white flex items-center justify-center',
        size === 'small' && 'size-5',
        size === 'medium' && 'size-7',
      )}>
        <img
          src={pokemonTypeData.icon}
          className={twMerge(
            size === 'small' && 'size-3',
            size === 'medium' && 'size-4.5',
          )}
        />
      </div>

      <p className={twMerge(
        'text-black font-medium capitalize',
        size === 'small' && 'text-xs',
        size === 'medium' && 'text-sm',
      )}>
        {(pokemonTypeData.label || '--')}
      </p>
    </div>
  );
}

export default PokemonTypeBadge;
