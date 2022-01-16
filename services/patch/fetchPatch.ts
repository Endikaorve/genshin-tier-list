import { IPatch } from 'interfaces/interfaces';

const fetchPatch = (patchID: string): Promise<any> => {
  return fetch(`http://localhost:3000/api/patch/${patchID}`)
    .then((res) => res.json())
    .then((response) => {
      const { patch } = response as { patch: IPatch | undefined };
      return patch;
    });
};

export default fetchPatch;
