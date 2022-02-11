export interface IPatch {
  name: string;
  tiers: ITier[];
}
export interface ITier {
  name: string;
  teams: ITeam[];
}

export interface ITeam {
  name: string;
  characters: ICharacter[];
}

export interface ICharacter {
  name: string;
  element: ICharacterElement;
  sets?: ICharacterSet[];
  stats?: ICharacterStats;
  alternatives?: ICharacter[];
}

export type ICharacterElement =
  | 'pyro'
  | 'hydro'
  | 'electro'
  | 'cryo'
  | 'geo'
  | 'anemo'
  | 'dendro';

export interface ISet {
  name: string;
  src: string;
}

export interface ICharacterSet {
  set1: ISet;
  set2?: ISet;
}
export interface ICharacterStats {
  sands: string;
  goblet: string;
  circlet: string;
}
