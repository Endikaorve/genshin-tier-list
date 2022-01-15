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
      {team.description}
    </Modal>
  );
};

export default TeamModal;
