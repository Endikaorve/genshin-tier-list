import { IPatch } from 'interfaces/interfaces';

const fetchAllPatches = (): Promise<any> => {
  return fetch('http://localhost:3000/api/patch/all-patches')
    .then((res) => res.json())
    .then((response) => {
      const { patches } = response as { patches: IPatch[] };
      return patches;
    });
};

export default fetchAllPatches;
