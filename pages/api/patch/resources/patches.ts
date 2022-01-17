import { IPatch } from 'interfaces/interfaces';

import CHARACTERS from 'pages/api/patch/resources/characters';

const patch_2_4: IPatch = {
  name: '2.4',
  tiers: [
    {
      name: 'S',
      teams: [
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
        // {
        //   name: 'Yae DPS',
        //   characters: [
        //     { ...CHARACTERS.yae },
        //     { ...CHARACTERS.raiden },
        //     { ...CHARACTERS.kazuha },
        //     { ...CHARACTERS.kokomi },
        //   ],
        // },
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
        {
          name: 'Sucrose Taser',
          characters: [
            { ...CHARACTERS.sucrose },
            {
              ...CHARACTERS.xingqiu,
              alternatives: [CHARACTERS.kokomi],
            },
            { ...CHARACTERS.fischl },
            { ...CHARACTERS.beidou },
          ],
        },
        {
          name: 'Raiden DPS',
          characters: [
            { ...CHARACTERS.raiden },
            { ...CHARACTERS.sara },
            { ...CHARACTERS.kazuha },
            { ...CHARACTERS.bennett },
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
          name: 'Ganyu Melt',
          characters: [
            { ...CHARACTERS.ganyu },
            { ...CHARACTERS.zhongli },
            { ...CHARACTERS.xiangling },
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
        {
          name: 'National',
          characters: [
            { ...CHARACTERS.xiangling },
            { ...CHARACTERS.bennett },
            { ...CHARACTERS.xingqiu },
            { ...CHARACTERS.sucrose },
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
          name: 'Sukokomon',
          characters: [
            { ...CHARACTERS.sucrose },
            { ...CHARACTERS.xiangling },
            { ...CHARACTERS.fischl },
            { ...CHARACTERS.kokomi },
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
          name: 'Itto DPS',
          characters: [
            { ...CHARACTERS.itto },
            { ...CHARACTERS.albedo },
            { ...CHARACTERS.zhongli },
            { ...CHARACTERS.gorou },
          ],
        },
      ],
    },
    {
      name: 'B',
      teams: [
        {
          name: 'HuTao Melt',
          characters: [
            { ...CHARACTERS.hutao },
            { ...CHARACTERS.xingqiu },
            { ...CHARACTERS.kaeya },
            { ...CHARACTERS.diona },
          ],
        },
        {
          name: 'Diluc DPS',
          characters: [
            { ...CHARACTERS.diluc },
            { ...CHARACTERS.xingqiu },
            { ...CHARACTERS.zhongli },
            { ...CHARACTERS.bennett },
          ],
        },
        {
          name: 'Eula DPS',
          characters: [
            { ...CHARACTERS.eula },
            { ...CHARACTERS.rosaria },
            { ...CHARACTERS.raiden },
            { ...CHARACTERS.zhongli },
          ],
        },
        {
          name: 'Noelle DPS',
          characters: [
            { ...CHARACTERS.noelle },
            { ...CHARACTERS.albedo },
            { ...CHARACTERS.zhongli },
            { ...CHARACTERS.gorou },
          ],
        },
        {
          name: 'F2P Reverse Melt',
          characters: [
            { ...CHARACTERS.xiangling },
            { ...CHARACTERS.bennett },
            { ...CHARACTERS.rosaria },
            { ...CHARACTERS.kaeya },
          ],
        },
        {
          name: 'Ningguang DPS',
          characters: [
            { ...CHARACTERS.ningguang },
            { ...CHARACTERS.zhongli },
            { ...CHARACTERS.fischl },
            { ...CHARACTERS.bennett },
          ],
        },
      ],
    },
    {
      name: 'C',
      teams: [
        {
          name: 'Yoimiya DPS',
          characters: [
            { ...CHARACTERS.yoimiya },
            { ...CHARACTERS.bennett },
            { ...CHARACTERS.xingqiu },
            { ...CHARACTERS.zhongli },
          ],
        },
        {
          name: 'Razor DPS',
          characters: [
            { ...CHARACTERS.razor },
            { ...CHARACTERS.fischl },
            { ...CHARACTERS.kaeya },
            { ...CHARACTERS.zhongli },
          ],
        },
      ],
    },
    {
      name: 'Oselin',
      teams: [
        {
          name: 'Keqing DPS',
          characters: [
            { ...CHARACTERS.keqing },
            { ...CHARACTERS.fischl },
            { ...CHARACTERS.kazuha },
            { ...CHARACTERS.kokomi },
          ],
        },
      ],
    },
  ],
};

const PATCHES: IPatch[] = [patch_2_4];

export default PATCHES;
