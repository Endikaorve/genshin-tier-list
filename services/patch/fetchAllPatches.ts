import { IPatch } from 'interfaces/interfaces';

const fetchAllPatches = (): Promise<any> => {
  return fetch('https://genshin-tier-list.vercel.app/api/patch/all-patches')
    .then((res) => res.json())
    .then((response) => {
      const { patches } = response as { patches: IPatch[] };
      return patches;
    });
};

export default fetchAllPatches;
