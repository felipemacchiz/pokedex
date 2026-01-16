import type { SelectOption } from "@/components/SelectBottomSheet"

export const pokemonTypes = {
  water: {
    label: 'Água',
    icon: '/assets/Water.svg',
    className: 'bg-element-water',
    labelClassName: 'text-black',
  },
  dragon: {
    label: 'Dragão',
    icon: '/assets/Dragon.svg',
    className: 'bg-element-dragon',
    labelClassName: 'text-white',
  },
  electric: {
    label: 'Elétrico',
    icon: '/assets/Electric.svg',
    className: 'bg-element-electric',
    labelClassName: 'text-black',
  },
  fairy: {
    label: 'Fada',
    icon: '/assets/Fairy.svg',
    className: 'bg-element-fairy',
    labelClassName: 'text-black',
  },
  ghost: {
    label: 'Fantasma',
    icon: '/assets/Ghost.svg',
    className: 'bg-element-ghost',
    labelClassName: 'text-white',
  },
  fire: {
    label: 'Fogo',
    icon: '/assets/Fire.svg',
    className: 'bg-element-fire',
    labelClassName: 'text-black',
  },
  ice: {
    label: 'Gelo',
    icon: '/assets/Ice.svg',
    className: 'bg-element-ice',
    labelClassName: 'text-black',
  },
  grass: {
    label: 'Grama',
    icon: '/assets/Grass.svg',
    className: 'bg-element-grass',
    labelClassName: 'text-black',
  },
  bug: {
    label: 'Inseto',
    icon: '/assets/Bug.svg',
    className: 'bg-element-bug',
    labelClassName: 'text-black',
  },
  fighting: {
    label: 'Lutador',
    icon: '/assets/Fighter.svg',
    className: 'bg-element-fighting',
    labelClassName: 'text-white',
  },
  normal: {
    label: 'Normal',
    icon: '/assets/Normal.svg',
    className: 'bg-element-normal',
    labelClassName: 'text-black',
  },
  dark: {
    label: 'Noturno',
    icon: '/assets/Dark.svg',
    className: 'bg-element-dark',
    labelClassName: 'text-white',
  },
  steel: {
    label: 'Metal',
    icon: '/assets/Steel.svg',
    className: 'bg-element-steel',
    labelClassName: 'text-black',
  },
  rock: {
    label: 'Pedra',
    icon: '/assets/Rock.svg',
    className: 'bg-element-rock',
    labelClassName: 'text-black',
  },
  psychic: {
    label: 'Psíquico',
    icon: '/assets/Psychic.svg',
    className: 'bg-element-psychic',
    labelClassName: 'text-black',
  },
  ground: {
    label: 'Terrestre',
    icon: '/assets/Ground.svg',
    className: 'bg-element-ground',
    labelClassName: 'text-black',
  },
  poison: {
    label: 'Venenoso',
    icon: '/assets/Poison.svg',
    className: 'bg-element-poison',
    labelClassName: 'text-black',
  },
  flying: {
    label: 'Voador',
    icon: '/assets/Flying.svg',
    className: 'bg-element-flying',
    labelClassName: 'text-black',
  },
}

export const pokemonTypesSelectOptions: SelectOption[] = [
  {
    value: '',
    label: 'Todos os tipos',
  },
  ...Object.entries(pokemonTypes).map(
    ([value, { label, className, labelClassName }]) => ({
      value,
      label,
      className,
      labelClassName,
    })
  )
];
