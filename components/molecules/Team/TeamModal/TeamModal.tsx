import styled from 'styled-components';

import Modal from 'components/atoms/Modal/Modal';
import Team from '../Team';

import { ICharacter, ITeam } from 'interfaces/interfaces';
import CharacterCard from 'components/molecules/CharacterCard/CharacterCard';

const TeamModal = ({
  team,
  isShown,
  hideModal,
}: {
  team: ITeam;
  isShown: boolean;
  hideModal: any;
}) => {
  return (
    <Modal title={team.name} isShown={isShown} onHideModal={hideModal}>
      <Team
        team={team}
        isCenter={true}
        isBox={true}
        isClickable={false}
        showTitle={false}
        characterSize={130}
        characterShowAlternatives={false}
      ></Team>

      <StyledCharacterAlternativesContainer>
        {team.characters.map((character: ICharacter, index: number) => (
          <CharacterAlternative
            key={index}
            character={character}
          ></CharacterAlternative>
        ))}
      </StyledCharacterAlternativesContainer>
    </Modal>
  );
};

const CharacterAlternative = ({ character }: { character: ICharacter }) => {
  const size: number = 90;

  if (!character.alternatives?.length) return null;

  return (
    <StyledCharacterAlternative>
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
    </StyledCharacterAlternative>
  );
};

export default TeamModal;

const StyledCharacterAlternativesContainer = styled.div`
  padding: var(--space-lg);
  padding-top: var(--space-xl);
`;

const StyledCharacterAlternative = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md);

  margin-bottom: var(--space-lg);

  font-size: 42px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
