import type { NextPage } from 'next';
import styled from 'styled-components';

import Head from 'next/head';

import Modal from 'components/atoms/Modal/Modal';
import { useState } from 'react';

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

const Team = ({ team }: any) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const showModal = () => {
    setIsModalShown(true);
  };

  const hideModal = () => {
    setIsModalShown(false);
  };

  return (
    <TeamContainer>
      <TeamCharactersContainer>
        {team.characters.map((character: any, index: any) => (
          <Character key={index} character={character}></Character>
        ))}
      </TeamCharactersContainer>
      <TeamTitle
        onClick={() => {
          showModal();
        }}
      >
        {team.name}
      </TeamTitle>

      <TeamModal
        team={team}
        isShown={isModalShown}
        hideModal={hideModal}
      ></TeamModal>
    </TeamContainer>
  );
};

const TeamModal = ({ team, isShown, hideModal }: any) => {
  return (
    <Modal title={team.name} isShown={isShown} onHideModal={hideModal}>
      {team.description}
    </Modal>
  );
};

const Character = ({ character }: any) => {
  const { name, element, alternatives } = character;
  const src: string = `/assets/images/characters/${name}.png`;
  const elementSrc = `/assets/images/elements/${element}.png`;
  const alt: string = name.toLowerCase();
  const size: number = 90;

  return (
    <CharacterContainer element={element} size={size}>
      <CharacterImage
        src={src}
        alt={alt}
        height={size}
        width={size}
        element={element}
      />

      {alternatives && (
        <CharacterAlternative
          numAlternatives={alternatives.length}
          element={element}
        />
      )}

      <CharacterElement
        src={elementSrc}
        alt={element}
        height={size / 5}
        width={size / 5}
        element={element}
      />
    </CharacterContainer>
  );
};

const CharacterAlternative = ({ numAlternatives, element }: any) => (
  <CharacterAlternativeBadge element={element}>
    +{numAlternatives}
  </CharacterAlternativeBadge>
);

/*********************/
/* Styled Components */
/*********************/

const Container = styled.main`
  display: block;
  max-width: 992px;
  margin: 0 auto;
  padding: var(--space-md) 0;
`;

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

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--space-md);
  border-radius: var(--border-radius);
  background-color: rgba(48, 48, 48);
  overflow: hidden;
`;

const TeamCharactersContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: var(--space-md);

  width: fit-content;
  padding: var(--space-md);
`;

const TeamTitle = styled.div`
  display: grid;
  place-items: center;
  padding: var(--space-md) var(--space-md) var(--space-lg) var(--space-md);
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const CharacterContainer: any = styled.div`
  position: relative;
  height: ${(props: any) => `${props.size}px`};
  width: ${(props: any) => `${props.size}px`};
  border-radius: var(--border-radius);
  overflow: hidden;
  /* border: ${(props: any) =>
    `1px solid var(--color-elements-${props.element})`}; */
  background-color: rgba(36, 36, 36);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props: any) =>
      `var(--color-elements-${props.element}-light)`};
  }
`;

const CharacterElement: any = styled.img`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 4px;
  background-color: rgba(48, 48, 48, 0.6);
  border-radius: 9999px;
`;

const CharacterImage: any = styled.img``;

const CharacterAlternativeBadge: any = styled.span`
  width: 25%;
  height: 25%;
  background-color: ${(props: any) => `var(--color-elements-${props.element})`};
  position: absolute;
  left: 4px;
  bottom: 4px;
  border-radius: 9999px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 700;
  color: rgb(48, 48, 48);
`;

export default Home;
