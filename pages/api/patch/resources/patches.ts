import { IPatch } from 'interfaces/interfaces';

import CHARACTERS from 'pages/api/resources/characters';

const patch_2_4: IPatch = {
  name: '2.4',
  tiers: [
    {
      name: 'S - 2.4',
      teams: [
        {
          name: 'Morgana',
          characters: [
            { ...CHARACTERS.ganyu },
            {
              ...CHARACTERS.ayaka,
              alternatives: [CHARACTERS.shenhe, CHARACTERS.diona],
            },
            { ...CHARACTERS.venti },
            {
              ...CHARACTERS.mona,
              alternatives: [CHARACTERS.kokomi],
            },
          ],
        },
        {
          name: 'Ayaka Freeze',
          characters: [
            { ...CHARACTERS.ayaka },
            {
              ...CHARACTERS.shenhe,
              alternatives: [
                CHARACTERS.diona,
                CHARACTERS.rosaria,
                CHARACTERS.kaeya,
              ],
            },
            {
              ...CHARACTERS.kazuha,
              alternatives: [CHARACTERS.venti],
            },
            {
              ...CHARACTERS.kokomi,
              alternatives: [CHARACTERS.xingqiu, CHARACTERS.mona],
            },
          ],
        },
        {
          name: 'Hu Tao Vape',
          characters: [
            { ...CHARACTERS.hutao },
            { ...CHARACTERS.xingqiu },
            { ...CHARACTERS.zhongli },
            {
              ...CHARACTERS.fischl,
              alternatives: [CHARACTERS.albedo],
            },
          ],
        },
        {
          name: 'International',
          characters: [
            { ...CHARACTERS.tartaglia },
            {
              ...CHARACTERS.kazuha,
              alternatives: [CHARACTERS.sucrose],
            },
            { ...CHARACTERS.xiangling },
            { ...CHARACTERS.bennett },
          ],
        },
      ],
    },
    {
      name: 'A',
      teams: [
        {
          name: 'Baaltional',
          characters: [
            { ...CHARACTERS.raiden },
            { ...CHARACTERS.xingqiu },
            { ...CHARACTERS.xiangling },
            { ...CHARACTERS.bennett },
          ],
        },
        {
          name: 'Mono Pyro',
          characters: [
            { ...CHARACTERS.xiangling },
            { ...CHARACTERS.bennett },
            { ...CHARACTERS.kazuha },
            { ...CHARACTERS.venti },
          ],
        },
        {
          name: 'Childe Fireworks',
          characters: [
            { ...CHARACTERS.tartaglia },
            { ...CHARACTERS.fischl },
            { ...CHARACTERS.beidou },
            { ...CHARACTERS.bennett },
          ],
        },
        {
          name: 'Xiao DPS',
          characters: [
            { ...CHARACTERS.xiao },
            { ...CHARACTERS.sucrose },
            { ...CHARACTERS.zhongli },
            { ...CHARACTERS.bennett },
          ],
        },
        {
          name: 'Zhongli Taser',
          characters: [
            { ...CHARACTERS.zhongli },
            { ...CHARACTERS.xingqiu },
            { ...CHARACTERS.fischl },
            { ...CHARACTERS.beidou },
          ],
        },
      ],
    },
  ],
};

const PATCHES: IPatch[] = [patch_2_4];

export default PATCHES;
