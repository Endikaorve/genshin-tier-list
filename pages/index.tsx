import type { NextPage } from 'next';

import Head from 'next/head';

import Container from 'components/atoms/Container/Container';
import Patch from 'components/molecules/Patch/Patch';
import { IPatch } from 'interfaces/interfaces';

export interface HomeProps {
  patch: IPatch;
}

const Home: NextPage = ({ patch }: any) => {
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

Home.getInitialProps = () => {
  return fetch('http://localhost:3000/api/patch')
    .then((res) => res.json())
    .then((response) => {
      const { patch } = response;
      return { patch: patch };
    });
};

export default Home;
