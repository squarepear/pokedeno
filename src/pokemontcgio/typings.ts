export interface Card {
  id?: string;
  name?: string;
  nationalPokedexNumber?: number;
  imageUrl?: string;
  imageUrlHiRes?: string;
  types?: Type[];
  supertype?: SuperType;
  subtype?: SubType;
  evolvesFrom?: string;
  hp?: number;
  retreatCost?: Type[];
  convertedRetreatCost?: number;
  number?: string;
  artist?: string;
  rarity?: Rarity;
  series?: string;
  set?: string;
  setCode?: string;
  ability?: {
    name: string;
    text: string;
    type: string;
  };
  attacks?: {
    cost: Type[];
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: number;
  }[];
  weaknesses?: {
    type: Type;
    value: string;
  }[];
  resistances?: {
    type: Type;
    value: string;
  }[];
}

export enum Type {
  Grass = "Grass",
  Fire = "Fire",
  Water = "Water",
  Lightning = "Lightning",
  Psychic = "Psychic",
  Fighting = "Fighting",
  Darkness = "Darkness",
  Metal = "Metal",
  Colorless = "Colorless",
  Fairy = "Fairy",
  Dragon = "Dragon",
}

export enum Rarity {
  Common = "Common",
  Rare = "Rare",
  RareACE = "Rare ACE",
  RareHolo = "Rare Holo",
  RareHoloEX = "Rare Holo EX",
  RareUltra = "Rare Ultra",
  Uncommon = "Uncommon",
  RareHoloGX = "Rare Holo GX",
  RareSecret = "Rare Secret",
  RareHoloLVX = "Rare Holo Lv.X",
  Legend = "LEGEND",
  RarePrime = "Rare Prime",
  RareBREAK = "Rare BREAK",
}

export enum SubType {
  Basic = "Basic",
  Ex = "EX",
  Item = "Item",
  PokémonTool = "Pokémon Tool",
  Special = "Special",
  Stadium = "Stadium",
  Stage1 = "Stage 1",
  Stage2 = "Stage 2",
  Supporter = "Supporter",
  Gx = "GX",
  TagTeam = "TAG TEAM",
  Legend = "LEGEND",
  LevelUp = "Level Up",
  TechnicalMachine = "Technical Machine",
  Mega = "MEGA",
}

export enum SuperType {
  Energy = "Energy",
  Pokémon = "Pokémon",
  Trainer = "Trainer",
}
