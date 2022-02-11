import styled from 'styled-components';

import Modal from 'components/atoms/Modal/Modal';

import {
  ICharacter,
  ICharacterSet,
  ICharacterStats,
  ITeam,
} from 'interfaces/interfaces';
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
      <StyledCharacterDetailsContainer>
        {team.characters.map((character: ICharacter, index: number) => (
          <StyledCharacterDetails key={index}>
            <CharacterCard
              character={character}
              size={150}
              showAlternatives={false}
              showHover={false}
            ></CharacterCard>

            {character.sets && (
              <StyledCharacterSetContainer>
                {character.sets.map((set: ICharacterSet, index: number) => (
                  <CharacterSet key={index} set={set} />
                ))}
                {character.stats && <CharacterStats stats={character.stats} />}
              </StyledCharacterSetContainer>
            )}

            <CharacterAlternative
              key={index}
              character={character}
            ></CharacterAlternative>
          </StyledCharacterDetails>
        ))}
      </StyledCharacterDetailsContainer>
    </Modal>
  );
};

const CharacterSet = ({ set }: { set: ICharacterSet }) => {
  const set1Src: string = `/assets/images/sets/${set.set1.src}.png`;
  const set2Src: string = set.set2
    ? `/assets/images/sets/${set.set2.src}.png`
    : '';

  return (
    <StyledCharacterSet>
      <StyledCharacterSetImg src={set1Src} title={set.set1.name} />
      <StyledCharacterSetImg src={set1Src} title={set.set1.name} />
      {set.set2 && (
        <>
          <StyledCharacterSetImg src={set2Src} title={set.set2.name} />
          <StyledCharacterSetImg src={set2Src} title={set.set2.name} />
        </>
      )}
    </StyledCharacterSet>
  );
};

const CharacterStats = ({ stats }: { stats: ICharacterStats }) => (
  <StyledCharacterStats>
    <StyledCharacterStatsStatSpan>{stats.sands}</StyledCharacterStatsStatSpan>
    <StyledCharacterStatsSeparatorSpan>/</StyledCharacterStatsSeparatorSpan>
    <StyledCharacterStatsStatSpan>{stats.goblet}</StyledCharacterStatsStatSpan>
    <StyledCharacterStatsSeparatorSpan>/</StyledCharacterStatsSeparatorSpan>
    <StyledCharacterStatsStatSpan>{stats.circlet}</StyledCharacterStatsStatSpan>
  </StyledCharacterStats>
);

const CharacterAlternative = ({ character }: { character: ICharacter }) => {
  const size: number = 90;

  if (!character.alternatives?.length) return null;

  return (
    <StyledCharacterAlternative>
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

/** STYLED COMPONENTS  **/

const StyledCharacterDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

const StyledCharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  align-items: center;

  padding-bottom: var(--space-lg);
  border-bottom: 1px solid rgba(64, 64, 64);

  &:last-of-type {
    border-bottom: none;
  }
`;

const StyledCharacterSetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  align-items: center;
  justify-content: center;
`;

const StyledCharacterSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: fit-content;
  padding: var(--space-md);

  border-radius: var(--border-radius);
  background: rgba(36, 36, 36);
`;

const StyledCharacterStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: fit-content;
  padding: 14px;

  border-radius: var(--border-radius);
  background: rgba(36, 36, 36);
  font-size: 18px;
`;

const StyledCharacterStatsStatSpan = styled.span`
  color: rgb(192, 192, 192);
`;

const StyledCharacterStatsSeparatorSpan = styled.span`
  color: rgb(96, 96, 96);
`;

const StyledCharacterSetImg = styled.img`
  width: 30px;
  height: 30px;
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
