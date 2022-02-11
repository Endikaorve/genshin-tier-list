import { IPatch } from 'interfaces/interfaces';

import CHARACTERS from 'pages/api/patch/resources/characters';
import SETS from 'pages/api/patch/resources/sets';

const patch_2_4: IPatch = {
  name: '2.4',
  tiers: [
    {
      name: 'S',
      teams: [
        {
          name: 'Ayaka Freeze',
          characters: [
            {
              ...CHARACTERS.ayaka,
              sets: [
                { set1: SETS.blizzardStrayer, set2: SETS.blizzardStrayer },
                { set1: SETS.blizzardStrayer, set2: SETS.gladiatorsFinale },
                {
                  set1: SETS.blizzardStrayer,
                  set2: SETS.shimenawasReminiscence,
                },
              ],
              stats: {
                sands: 'ATK%',
                goblet: 'Cryo',
                circlet: 'CD - ATK%',
              },
            },
            {
              ...CHARACTERS.shenhe,
              sets: [
                {
                  set1: SETS.noblesseOblige,
                  set2: SETS.noblesseOblige,
                },
                {
                  set1: SETS.gladiatorsFinale,
                  set2: SETS.shimenawasReminiscence,
                },
              ],
              stats: {
                sands: 'ATK% - ER%',
                goblet: 'ATK%',
                circlet: 'ATK%',
              },
              alternatives: [
                CHARACTERS.diona,
                CHARACTERS.rosaria,
                CHARACTERS.kaeya,
              ],
            },
            {
              ...CHARACTERS.kazuha,
              sets: [
                {
                  set1: SETS.viridescentVenerer,
                  set2: SETS.viridescentVenerer,
                },
              ],
              stats: {
                sands: 'EM',
                goblet: 'EM',
                circlet: 'EM',
              },
              alternatives: [CHARACTERS.venti],
            },
            {
              ...CHARACTERS.kokomi,
              sets: [
                {
                  set1: SETS.oceanHuedClam,
                  set2: SETS.oceanHuedClam,
                },
                {
                  set1: SETS.tenacityOfTheMillelith,
                  set2: SETS.tenacityOfTheMillelith,
                },
              ],
              stats: {
                sands: 'ER% - HP%',
                goblet: 'HP%',
                circlet: 'Heal',
              },
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
