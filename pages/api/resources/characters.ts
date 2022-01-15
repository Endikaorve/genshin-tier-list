import { ICharacter } from 'interfaces/interfaces';

const CHARACTERS = {
  // CRYO
  ayaka: { name: 'Ayaka', element: 'cryo' } as ICharacter,
  diona: { name: 'Diona', element: 'cryo' } as ICharacter,
  ganyu: { name: 'Ganyu', element: 'cryo' } as ICharacter,
  kaeya: { name: 'Kaeya', element: 'cryo' } as ICharacter,
  rosaria: { name: 'Rosaria', element: 'cryo' } as ICharacter,
  shenhe: { name: 'Shenhe', element: 'cryo' } as ICharacter,

  // ANEMO
  kazuha: { name: 'Kazuha', element: 'anemo' } as ICharacter,
  sucrose: { name: 'Sucrose', element: 'anemo' } as ICharacter,
  venti: { name: 'Venti', element: 'anemo' } as ICharacter,
  xiao: { name: 'Xiao', element: 'anemo' } as ICharacter,

  // HYDRO
  kokomi: { name: 'Kokomi', element: 'hydro' } as ICharacter,
  mona: { name: 'Mona', element: 'hydro' } as ICharacter,
  tartaglia: { name: 'Tartaglia', element: 'hydro' } as ICharacter,
  xingqiu: { name: 'Xingqiu', element: 'hydro' } as ICharacter,

  // PYRO
  bennett: { name: 'Bennett', element: 'pyro' } as ICharacter,
  hutao: { name: 'HuTao', element: 'pyro' } as ICharacter,
  xiangling: { name: 'Xiangling', element: 'pyro' } as ICharacter,

  // ELECTRO
  beidou: { name: 'Beidou', element: 'electro' } as ICharacter,
  fischl: { name: 'Fischl', element: 'electro' } as ICharacter,
  raiden: { name: 'Raiden', element: 'electro' } as ICharacter,

  // GEO
  albedo: { name: 'Albedo', element: 'geo' } as ICharacter,
  zhongli: { name: 'Zhongli', element: 'geo' } as ICharacter,
};

export default CHARACTERS;
