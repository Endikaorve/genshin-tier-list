import { useState } from 'react';
import styled from 'styled-components';

import Modal from 'components/atoms/Modal/Modal';
import CharacterCard from '../CharacterCard/CharacterCard';

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
          <CharacterCard key={index} character={character} />
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

export default Team;

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
