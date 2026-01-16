
export type SimpleData = {
  name: string;
  url: string;
};

export type PokemonAbilityData = {
  ability: SimpleData;
  is_hidden: boolean;
  slot: number;
}

export type PokemonGameIndexData = {
  game_index: number;
  version: SimpleData;
}

export type PokemonMoveData = {
  move: SimpleData;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: SimpleData;
    order: number | null;
    version_group: SimpleData;
  }[]
}

export type PokemonSpritesData = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export type PokemonStatsData = {
  base_stat: number;
  affort: number;
  stat: SimpleData;
}

export type PokemonTypeData = {
  slot: number;
  type: SimpleData;
}

export type PokemonData = {
  abilities: PokemonAbilityData[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: SimpleData[];
  game_indices: PokemonGameIndexData[];
  height: number;
  held_items: Object[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMoveData[];
  name: string;
  order: number;
  past_abilities: PokemonAbilityData[];
  past_types: SimpleData[];
  species: SimpleData;
  sprites: PokemonSpritesData & {
    other: {
      dream_world: PokemonSpritesData;
      home: PokemonSpritesData;
      'official-artwork': PokemonSpritesData;
      showdown: PokemonSpritesData;
    };
    versions: Record<string, any>;
  };
  stats: PokemonStatsData[];
  types: PokemonTypeData[];
  weight: number;
}

export type PokemonListItemData = {
  name: string;
  url: string;
}

export type PokemonListApiResponse = {
  results: PokemonListItemData[];
  next: string | null;
  count: number;
}

export type PokemonSpecieData = {
  base_happiness: number;
  capture_rate: number;
  color: SimpleData;
  egg_groups: SimpleData[];
  evolution_chain: SimpleData;
  evolves_from_species: SimpleData;
  flavor_text_entries: {
    flavor_text: string;
    language: SimpleData;
    version: SimpleData;
  }[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: SimpleData;
  }[];
  generation: SimpleData;
  growth_rate: SimpleData;
  habitat: SimpleData;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  pal_park_encounters: {
    area: SimpleData;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: SimpleData;
  }[];
  shape: SimpleData;
  varieties: {
    is_default: boolean;
    pokemon: SimpleData;
  }[];
}

export type PokemonEvolutionChainData = {
  evolution_details: {
    min_level: number;
  }[];
  evolves_to: PokemonEvolutionChainData[];
  is_baby: boolean;
  species: SimpleData;
}

export type PokemonEvolutionData = {
  chain: PokemonEvolutionChainData;
  id: number;
}
