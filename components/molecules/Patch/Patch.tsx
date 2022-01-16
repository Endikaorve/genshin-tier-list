import styled from 'styled-components';
import Tier from 'components/molecules/Tier/Tier';

import { ITier, IPatch } from 'interfaces/interfaces';

const Patch = ({
  patches,
  selectedPatch,
  onPreviousPatchID,
  onNextPatchID,
}: {
  patches: IPatch[];
  selectedPatch: IPatch | undefined;
  onPreviousPatchID: any;
  onNextPatchID: any;
}) => {
  if (!selectedPatch) return <>Parche no seleccionado</>;

  return (
    <>
      <PatchTitle>
        <StyledPatchSelectorArrow onClick={onPreviousPatchID}>
          {'<'}
        </StyledPatchSelectorArrow>

        {`Parche ${selectedPatch.name}`}

        <StyledPatchSelectorArrow onClick={onNextPatchID}>
          {'>'}
        </StyledPatchSelectorArrow>
      </PatchTitle>

      {selectedPatch.tiers.map((tier: ITier, index: number) => (
        <Tier key={index} tier={tier} index={index} />
      ))}
    </>
  );
};

export default Patch;

const PatchTitle: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
  padding: var(--space-xl);
  color: white;
  font-size: 48px;
  font-weight: 700;
`;

const StyledPatchSelectorArrow = styled.span`
  cursor: pointer;

  &:hover {
    color: rgba(192, 192, 192);
  }
`;
