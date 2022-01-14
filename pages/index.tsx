import type { NextPage } from 'next';
import styled from 'styled-components';

import Head from 'next/head';

import { useState } from 'react';

import Container from 'components/atoms/Container/Container';
import Team from 'components/molecules/Team/Team';

interface Patch {
  name: string;
  tiers: Tier[];
}
interface Tier {
  name: string;
  teams: Team[];
}

interface Team {
  name: string;
  description: string;
  characters: Character[];
}

interface Character {
  name: string;
  element: CharacterElement;
  alternatives?: Character[];
}

type CharacterElement =
  | 'pyro'
  | 'hydro'
  | 'electro'
  | 'cryo'
  | 'geo'
  | 'anemo'
  | 'dendro';

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

const Patch = ({ patch }: any) => {
  if (!patch) return null;

  return (
    <>
      <PatchTitle>{`Parche ${patch.name}`}</PatchTitle>
      {patch.tiers.map((tier: any, index: any) => (
        <Tier key={index} tier={tier} />
      ))}
    </>
  );
};

const Tier = ({ tier }: any) => {
  return (
    <TierContainer>
      <TierTitle tierName={tier.name}>{tier.name.toUpperCase()}</TierTitle>
      <TierTeamsContainer>
        {tier.teams.map((team: any, index: any) => (
          <Team key={index} team={team}></Team>
        ))}
      </TierTeamsContainer>
    </TierContainer>
  );
};

/*********************/
/* Styled Components */
/*********************/

const PatchTitle: any = styled.div`
  display: grid;
  place-items: center;
  padding: var(--space-lg);
  color: white;
  font-size: 48px;
  font-weight: 700;
`;

const TierContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--space-lg) 0;
  background: rgba(24, 24, 24);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const TierTitle: any = styled.div`
  display: grid;
  place-items: center;
  padding: var(--space-md);
  background-color: ${(props: any) => `var(--color-tiers-${props.tierName})`};
  color: white;
  font-size: 48px;
  font-weight: 600;
`;

const TierTeamsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: var(--space-md);
  padding: var(--space-md);
  background: rgba(24, 24, 24);
  gap: var(--space-lg);
`;

export default Home;
