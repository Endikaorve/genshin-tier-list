import styled from 'styled-components';
import Tier from 'components/molecules/Tier/Tier';

import { ITier, IPatch } from 'interfaces/interfaces';

const Patch = ({ patch }: { patch: IPatch | undefined }) => {
  if (!patch) return <>Parche no seleccionado</>;

  return (
    <>
      <PatchTitle>{`Parche ${patch.name}`}</PatchTitle>
      {patch.tiers.map((tier: ITier, index: number) => (
        <Tier key={index} tier={tier} index={index} />
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
