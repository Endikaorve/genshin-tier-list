import styled from 'styled-components';
import Tier from 'components/molecules/Tier/Tier';

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

export default Patch;

const PatchTitle: any = styled.div`
  display: grid;
  place-items: center;
  padding: var(--space-lg);
  color: white;
  font-size: 48px;
  font-weight: 700;
`;
