import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    patch: {
      name: '2.4',
      tiers: [
        {
          name: 's',
          teams: [
            {
              name: 'Morgana',
              description: 'Descripción Morgana',
              characters: [
                {
                  name: 'Ganyu',
                  element: 'cryo',
                },
                {
                  name: 'Ayaka',
                  element: 'cryo',
                  alternatives: [
                    {
                      name: 'Shenhe',
                      element: 'cryo',
                    },
                    {
                      name: 'Diona',
                      element: 'cryo',
                    },
                  ],
                },
                {
                  name: 'Venti',
                  element: 'anemo',
                },
                {
                  name: 'Mona',
                  element: 'hydro',
                  alternatives: [
                    {
                      name: 'Kokomi',
                      element: 'hydro',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Ayaka Freeze',
              description: 'Descripción Ayaka Freeze',
              characters: [
                {
                  name: 'Ayaka',
                  element: 'cryo',
                },
                {
                  name: 'Shenhe',
                  element: 'cryo',
                },
                {
                  name: 'Kazuha',
                  element: 'anemo',
                },
                {
                  name: 'Kokomi',
                  element: 'hydro',
                },
              ],
            },

            {
              name: 'Hu Tao Vape',
              description: 'Descripción Hu Tao Vape',
              characters: [
                {
                  name: 'HuTao',
                  element: 'pyro',
                },
                {
                  name: 'Xingqiu',
                  element: 'hydro',
                },
                {
                  name: 'Zhongli',
                  element: 'geo',
                },
                {
                  name: 'Fischl',
                  element: 'electro',
                },
              ],
            },
            {
              name: 'International',
              description: 'Descripción International',
              characters: [
                {
                  name: 'Tartaglia',
                  element: 'hydro',
                },
                {
                  name: 'Kazuha',
                  element: 'anemo',
                },
                {
                  name: 'Xiangling',
                  element: 'pyro',
                },
                {
                  name: 'Bennett',
                  element: 'pyro',
                },
              ],
            },
          ],
        },
        {
          name: 'a',
          teams: [
            {
              name: 'Baaltional',
              description: 'Descripción Baaltional',
              characters: [
                {
                  name: 'Raiden',
                  element: 'electro',
                },
                {
                  name: 'Xingqiu',
                  element: 'hydro',
                },
                {
                  name: 'Xiangling',
                  element: 'pyro',
                },
                {
                  name: 'Bennett',
                  element: 'pyro',
                },
              ],
            },
            {
              name: 'Mono Pyro',
              description: 'Descripción Mono Pyro',
              characters: [
                {
                  name: 'Xiangling',
                  element: 'pyro',
                },
                {
                  name: 'Bennett',
                  element: 'pyro',
                },
                {
                  name: 'Kazuha',
                  element: 'anemo',
                },
                {
                  name: 'Venti',
                  element: 'anemo',
                },
              ],
            },
            {
              name: 'Childe Fireworks',
              description: 'Descripción Childe Firework',
              characters: [
                {
                  name: 'Tartaglia',
                  element: 'hydro',
                },
                {
                  name: 'Fischl',
                  element: 'electro',
                },
                {
                  name: 'Beidou',
                  element: 'electro',
                },
                {
                  name: 'Bennett',
                  element: 'pyro',
                },
              ],
            },
            {
              name: 'Xiao DPS',
              description: 'Descripción Xiao DPS',
              characters: [
                {
                  name: 'Xiao',
                  element: 'anemo',
                },
                {
                  name: 'Sucrose',
                  element: 'anemo',
                },
                {
                  name: 'Zhongli',
                  element: 'geo',
                },
                {
                  name: 'Bennett',
                  element: 'pyro',
                },
              ],
            },
            {
              name: 'Zhongli Taser',
              description: 'Descripción Zhongli Taser',
              characters: [
                {
                  name: 'Zhongli',
                  element: 'geo',
                },
                {
                  name: 'Xingqiu',
                  element: 'hydro',
                },
                {
                  name: 'Fischl',
                  element: 'electro',
                },
                {
                  name: 'Beidou',
                  element: 'electro',
                },
              ],
            },
          ],
        },
        {
          name: 'b',
          teams: [
            {
              name: 'Xiao DPS',
              description: 'Xiao DPS',
              characters: [
                {
                  name: 'Xiao',
                  element: 'anemo',
                },
                {
                  name: 'Sucrose',
                  element: 'anemo',
                },
                {
                  name: 'Zhongli',
                  element: 'geo',
                },
                {
                  name: 'Bennett',
                  element: 'pyro',
                },
              ],
            },
          ],
        },
        {
          name: 'c',
          teams: [
            {
              name: 'Xiao DPS',
              description: 'Xiao DPS',
              characters: [
                {
                  name: 'Xiao',
                  element: 'anemo',
                },
                {
                  name: 'Sucrose',
                  element: 'anemo',
                },
                {
                  name: 'Zhongli',
                  element: 'geo',
                },
                {
                  name: 'Bennett',
                  element: 'pyro',
                },
              ],
            },
          ],
        },
      ],
    },
  });
}
