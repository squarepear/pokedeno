export interface pokemon {
  abilities: {
    ability: namedResource;
    isHidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: namedResource[];
  game_indices: {
    game_index: number;
    version: namedResource;
  }[];
  height: number;
  held_items: any[]; // TODO: ADD
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: namedResource;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: namedResource;
      version_group: namedResource;
    }[];
  }[];
  name: string;
  order: number;
  species: namedResource;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: any[]; // TODO: ADD
    versions: any[]; // TODO: ADD
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: namedResource;
  }[];
  types: {
    slot: number;
    type: namedResource;
  }[];
  weight: number;
}

interface namedResource {
  name: string;
  url: string;
}
