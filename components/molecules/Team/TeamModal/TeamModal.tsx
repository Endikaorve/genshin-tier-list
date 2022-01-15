import styled from 'styled-components';

import Modal from 'components/atoms/Modal/Modal';
import Team from '../Team';

const TeamModal = ({ team, isShown, hideModal }: any) => {
  return (
    <Modal title={team.name} isShown={isShown} onHideModal={hideModal}>
      <Team
        team={team}
        isCenter={true}
        showTitle={false}
        characterSize={150}
        characterShowAlternatives={false}
        characterShowHover={false}
      ></Team>

      <TeamModalDescription>
        <TeamModalDescriptionTitle>Descripción</TeamModalDescriptionTitle>
        <TeamModalDescriptionBody>{team.description}</TeamModalDescriptionBody>
      </TeamModalDescription>

      <TeamModalDescription>
        <TeamModalDescriptionTitle>Alternativas</TeamModalDescriptionTitle>
        <TeamModalDescriptionBody>{team.description}</TeamModalDescriptionBody>
      </TeamModalDescription>

      <TeamModalDescription>
        <TeamModalDescriptionTitle>Alternativas</TeamModalDescriptionTitle>
        <TeamModalDescriptionBody>{team.description}</TeamModalDescriptionBody>
      </TeamModalDescription>
    </Modal>
  );
};

export default TeamModal;

const TeamModalDescription = styled.div`
  padding: 10px;
`;

const TeamModalDescriptionTitle = styled.p`
  margin: var(--space-md) 0;
  font-size: 22px;
`;

const TeamModalDescriptionBody = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 200;
`;
