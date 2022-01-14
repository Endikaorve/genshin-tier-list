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
  description: string;
  characters: ICharacter[];
}

export interface ICharacter {
  name: string;
  element: ICharacterElement;
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
