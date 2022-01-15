import { NextApiRequest, NextApiResponse } from 'next';

import { IPatch } from 'interfaces/interfaces';

import PATCHES from './resources/patches';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  let { patchID } = req.query;
  patchID = patchID.toString();

  const patch: IPatch | undefined = getPatchData(patchID);

  res.status(200).json({ patch: patch });
};

const getPatchData = (patchID: string): IPatch | undefined => {
  const formatedPatchID = formatPatchID(patchID);

  return PATCHES.find((patch: IPatch) => patch.name === formatedPatchID);
};

const formatPatchID = (patch: string): string => {
  return patch.replace('-', '.');
};

export default handler;
