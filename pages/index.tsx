import type { NextPage } from 'next';

import Head from 'next/head';

import Container from 'components/atoms/Container/Container';
import Patch from 'components/molecules/Patch/Patch';
import { useState } from 'react';

import fetchAllPatches from 'functions/Patch/fetchAllPatches';

const Home: NextPage = ({ patches }: any) => {
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
        <Patch patches={patches} />
      </Container>
    </div>
  );
};

Home.getInitialProps = async () => {
  const patches = await fetchAllPatches();
  return { patches: patches };
};

export default Home;
