import { NextApiRequest, NextApiResponse } from 'next';

import PATCHES from './resources/patches';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ patches: PATCHES });
};

export default handler;
