import type { NextPage } from 'next';

import Head from 'next/head';

import Container from 'components/atoms/Container/Container';
import Patch from 'components/molecules/Patch/Patch';
import { IPatch } from 'interfaces/interfaces';
import { useEffect, useState } from 'react';

import fetchPatch from 'functions/Patch/fetchPatch';

const Home: NextPage = () => {
  const [patch, setPatch] = useState<IPatch | undefined>(undefined);
  const defaultPatch: string = '2-4';

  useEffect(() => {
    fetchPatch(defaultPatch)
      .then((patch: IPatch | undefined) => {
        setPatch(patch);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Head>
        <title>Genshin Impact Tier List</title>
        <meta name='description' content='Genshin Impact Tier List'></meta>
        <meta
          name='keywords'
          content='genshin, impact, genshin impact, tier list, meta, teams, top tier teams, characters, top tier characters'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Patch patch={patch} />
      </Container>
    </div>
  );
};

export default Home;
