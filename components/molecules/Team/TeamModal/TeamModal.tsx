import styled from 'styled-components';

import Modal from 'components/atoms/Modal/Modal';
import Team from '../Team';

import { ICharacter, ITeam } from 'interfaces/interfaces';
import CharacterCard from 'components/molecules/CharacterCard/CharacterCard';

const TeamModal = ({ team, isShown, hideModal }: any) => {
  return (
    <Modal title={team.name} isShown={isShown} onHideModal={hideModal}>
      <Team
        team={team}
        isCenter={true}
        isBox={false}
        showTitle={false}
        characterSize={150}
        characterShowAlternatives={false}
        characterShowHover={false}
      ></Team>

      <StyledTeamModalDetailsContainer></StyledTeamModalDetailsContainer>

      {team.characters.map((character: ICharacter, index: number) => (
        <CharacterAlternativesBlock
          key={index}
          character={character}
        ></CharacterAlternativesBlock>
      ))}
    </Modal>
  );
};

const CharacterAlternativesBlock = ({ character }: any) => {
  const size: number = 100;

  if (!character.alternatives?.length) return null;

  return (
    <StyledCharacterAlternativesBlock>
      <CharacterCard
        character={character}
        size={size}
        showAlternatives={false}
        showHover={false}
      ></CharacterCard>

      {'>'}

      {character.alternatives.map(
        (characterAlternative: ICharacter, index: number) => (
          <CharacterCard
            key={index}
            character={characterAlternative}
            size={size}
            showAlternatives={false}
            showHover={false}
          ></CharacterCard>
        )
      )}
    </StyledCharacterAlternativesBlock>
  );
};

export default TeamModal;

const StyledTeamModalDetailsContainer = styled.div`
  padding: var(--space-xl) var(--space-md) 0 var(--space-md);
`;

const StyledCharacterAlternativesBlock = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);

  margin-bottom: var(--space-lg);

  font-size: 42px;
`;
