export interface Pokemon {
  abilities: {
    ability: NamedResource;
    isHidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: NamedResource[];
  game_indices: {
    game_index: number;
    version: NamedResource;
  }[];
  height: number;
  held_items: {
    item: NamedResource;
    version_details: {
      rarity: number;
      version: NamedResource;
    }[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: NamedResource;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: NamedResource;
      version_group: NamedResource;
    }[];
  }[];
  name: string;
  order: number;
  species: NamedResource;
  sprites: Sprites;
  stats: {
    base_stat: number;
    effort: number;
    stat: NamedResource;
  }[];
  types: {
    slot: number;
    type: NamedResource;
  }[];
  weight: number;
}

export interface PokemonType {
  damage_relations: {
    double_damage_from: NamedResource[];
    double_damage_to: NamedResource[];
    half_damage_from: NamedResource[];
    half_damage_to: NamedResource[];
    no_damage_from: NamedResource[];
    no_damage_to: NamedResource[];
  };
  game_indices: {
    game_index: number;
    NamedResource: NamedResource;
  }[];
  generation: NamedResource;
  id: number;
  move_damage_class: NamedResource;
  moves: NamedResource[];
  name: string;
  names: {
    language: NamedResource;
    name: string;
  }[];
  pokemon: {
    pokemon: NamedResource;
    slot: number;
  }[];
}

export interface PokemonAbility {
  effect_changes: {
    effect_entries: {
      effect: string;
      language: NamedResource;
    }[];
    version_group: NamedResource;
  }[];
  effect_entries: {
    effect: string;
    language: NamedResource;
    short_effect: string;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: NamedResource;
    version_group: NamedResource;
  }[];
  generation: NamedResource;
  id: number;
  is_main_series: boolean;
  name: string;
  names: {
    language: NamedResource;
    name: string;
  }[];
  pokemon: {
    is_hidden: boolean;
    pokemon: NamedResource;
    slot: number;
  }[];
}

interface Sprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  other?: {
    [type: string]: Sprites;
  };
  versions?: {
    [generation: string]: {
      [game: string]: Sprites;
    };
  };
  animated?: Sprites;
}

interface NamedResource {
  name: string;
  url: string;
}
