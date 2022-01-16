import { useState, MouseEvent } from 'react';
import styled from 'styled-components';

import CharacterCard from '../CharacterCard/CharacterCard';
import TeamModal from './TeamModal/TeamModal';

import { ICharacter, ITeam } from 'interfaces/interfaces';

const Team = ({
  team,
  showTitle = true,
  isCenter = false,
  isBox = true,
  isClickable = true,
  characterSize,
  characterShowAlternatives = true,
}: {
  team: ITeam;
  showTitle?: boolean;
  isCenter?: boolean;
  isBox?: boolean;
  isClickable?: boolean;
  characterSize: number;
  characterShowAlternatives?: boolean;
}) => {
  const [isTeamaModalShown, setIsTeamaModalShown] = useState(false);

  const handleClickTeamContainer = (e: MouseEvent) => {
    e.preventDefault();
    showTeamModal();
  };

  const showTeamModal = () => {
    if (!isClickable) return;
    setIsTeamaModalShown(true);
  };

  const hideTeamModal = () => {
    setIsTeamaModalShown(false);
  };

  return (
    <>
      <TeamContainer
        onClick={(e: MouseEvent) => {
          handleClickTeamContainer(e);
        }}
        isClickable={isClickable}
      >
        <TeamCharactersContainer isCenter={isCenter} isBox={isBox}>
          {team.characters.map((character: ICharacter, index: number) => (
            <CharacterCard
              key={index}
              character={character}
              size={characterSize}
              showAlternatives={characterShowAlternatives}
              showHover={isClickable}
            />
          ))}
        </TeamCharactersContainer>

        {showTitle && <TeamTitle>{team.name}</TeamTitle>}
      </TeamContainer>

      <TeamModal
        team={team}
        isShown={isTeamaModalShown}
        hideModal={() => hideTeamModal()}
      ></TeamModal>
    </>
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
  cursor: ${({ isClickable }: { isClickable: boolean }) =>
    isClickable ? `pointer` : 'default'};
  transition: 0.2s;

  &:hover {
    background-color: ${({ isClickable }: { isClickable: boolean }) =>
      isClickable ? `background-color: rgba(72, 72, 72)` : ''};
  }
`;

const TeamCharactersContainer: any = styled.div`
  display: grid;
  grid-template-columns: ${({ isBox }: { isBox: boolean }) =>
    isBox
      ? `min-content min-content`
      : 'min-content min-content min-content min-content'};
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
`;
