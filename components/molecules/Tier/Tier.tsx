import styled from 'styled-components';
import Team from 'components/molecules/Team/Team';

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

export default Tier;

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
