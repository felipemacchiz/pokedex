import type { SelectOption } from "@/components/SelectBottomSheet"

export const pokemonTypes = {
  water: {
    label: 'Água',
    icon: '/assets/Water.svg',
    outline: '/assets/WaterOutline.svg',
    className: 'bg-element-water',
    labelClassName: 'text-black',
  },
  dragon: {
    label: 'Dragão',
    icon: '/assets/Dragon.svg',
    outline: '/assets/DragonOutline.svg',
    className: 'bg-element-dragon',
    labelClassName: 'text-white',
  },
  electric: {
    label: 'Elétrico',
    icon: '/assets/Electric.svg',
    outline: '/assets/ElectricOutline.svg',
    className: 'bg-element-electric',
    labelClassName: 'text-black',
  },
  fairy: {
    label: 'Fada',
    icon: '/assets/Fairy.svg',
    outline: '/assets/FairyOutline.svg',
    className: 'bg-element-fairy',
    labelClassName: 'text-black',
  },
  ghost: {
    label: 'Fantasma',
    icon: '/assets/Ghost.svg',
    outline: '/assets/GhostOutline.svg',
    className: 'bg-element-ghost',
    labelClassName: 'text-white',
  },
  fire: {
    label: 'Fogo',
    icon: '/assets/Fire.svg',
    outline: '/assets/FireOutline.svg',
    className: 'bg-element-fire',
    labelClassName: 'text-black',
  },
  ice: {
    label: 'Gelo',
    icon: '/assets/Ice.svg',
    outline: '/assets/IceOutline.svg',
    className: 'bg-element-ice',
    labelClassName: 'text-black',
  },
  grass: {
    label: 'Grama',
    icon: '/assets/Grass.svg',
    outline: '/assets/GrassOutline.svg',
    className: 'bg-element-grass',
    labelClassName: 'text-black',
  },
  bug: {
    label: 'Inseto',
    icon: '/assets/Bug.svg',
    outline: '/assets/BugOutline.svg',
    className: 'bg-element-bug',
    labelClassName: 'text-black',
  },
  fighting: {
    label: 'Lutador',
    icon: '/assets/Fighter.svg',
    outline: '/assets/FighterOutline.svg',
    className: 'bg-element-fighting',
    labelClassName: 'text-white',
  },
  normal: {
    label: 'Normal',
    icon: '/assets/Normal.svg',
    outline: '/assets/NormalOutline.svg',
    className: 'bg-element-normal',
    labelClassName: 'text-black',
  },
  dark: {
    label: 'Noturno',
    icon: '/assets/Dark.svg',
    outline: '/assets/DarkOutline.svg',
    className: 'bg-element-dark',
    labelClassName: 'text-white',
  },
  steel: {
    label: 'Metal',
    icon: '/assets/Steel.svg',
    outline: '/assets/SteelOutline.svg',
    className: 'bg-element-steel',
    labelClassName: 'text-black',
  },
  rock: {
    label: 'Pedra',
    icon: '/assets/Rock.svg',
    outline: '/assets/RockOutline.svg',
    className: 'bg-element-rock',
    labelClassName: 'text-black',
  },
  psychic: {
    label: 'Psíquico',
    icon: '/assets/Psychic.svg',
    outline: '/assets/PsychicOutline.svg',
    className: 'bg-element-psychic',
    labelClassName: 'text-black',
  },
  ground: {
    label: 'Terrestre',
    icon: '/assets/Ground.svg',
    outline: '/assets/GroundOutline.svg',
    className: 'bg-element-ground',
    labelClassName: 'text-black',
  },
  poison: {
    label: 'Venenoso',
    icon: '/assets/Poison.svg',
    outline: '/assets/PoisonOutline.svg',
    className: 'bg-element-poison',
    labelClassName: 'text-black',
  },
  flying: {
    label: 'Voador',
    icon: '/assets/Flying.svg',
    outline: '/assets/FlyingOutline.svg',
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
