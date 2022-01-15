import { useState } from 'react';
import styled from 'styled-components';

import CharacterCard from '../CharacterCard/CharacterCard';
import TeamModal from './TeamModal/TeamModal';

import { hideBodyScrollbar, showBodyScrollbar } from 'utils/utils';

const Team = ({
  team,
  showTitle = true,
  isCenter = false,
  characterSize,
  characterShowAlternatives = true,
  characterShowHover = true,
}: any) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = () => {
    hideBodyScrollbar();
    setIsModalShown(true);
  };

  const hideModal = () => {
    showBodyScrollbar();
    setIsModalShown(false);
  };

  return (
    <TeamContainer>
      <TeamCharactersContainer isCenter={isCenter}>
        {team.characters.map((character: any, index: any) => (
          <CharacterCard
            key={index}
            character={character}
            size={characterSize}
            showAlternatives={characterShowAlternatives}
            showHover={characterShowHover}
          />
        ))}
      </TeamCharactersContainer>

      {showTitle && (
        <TeamTitle
          onClick={() => {
            showModal();
          }}
        >
          {team.name}
        </TeamTitle>
      )}

      <TeamModal
        team={team}
        isShown={isModalShown}
        hideModal={hideModal}
      ></TeamModal>
    </TeamContainer>
  );
};

export default Team;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--space-md);
  border-radius: var(--border-radius);
  background-color: rgba(48, 48, 48);
  overflow: hidden;
`;

const TeamCharactersContainer: any = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: var(--space-md);

  width: fit-content;
  padding: var(--space-md);

  margin: ${({ isCenter }: any) => (isCenter ? '0 auto' : '')};
`;

const TeamTitle = styled.div`
  display: grid;
  place-items: center;
  padding: var(--space-md) var(--space-md) var(--space-lg) var(--space-md);
  color: white;
  font-size: 18px;
  cursor: pointer;
`;
