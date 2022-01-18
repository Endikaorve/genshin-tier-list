import styled from 'styled-components';
import { useState } from 'react';

import Tier from 'components/molecules/Tier/Tier';

import { ITier, IPatch } from 'interfaces/interfaces';

const Patch = ({ patches }: { patches: IPatch[] }) => {
  const previousPatchID = () => {
    setSelectedPatchIndex(selectedPatchIndex - 1);
  };

  const nextPatchID = () => {
    setSelectedPatchIndex(selectedPatchIndex + 1);
  };

  const [selectedPatchIndex, setSelectedPatchIndex] = useState<number>(
    patches.length - 1
  );

  const selectedPatch = patches[selectedPatchIndex];

  if (!selectedPatch) return <>Parche no seleccionado</>;

  return (
    <>
      <PatchTitle>
        <StyledPatchSelectorArrowContainer>
          {patches[selectedPatchIndex - 1] && (
            <StyledPatchSelectorArrow onClick={previousPatchID}>
              {'<'}
            </StyledPatchSelectorArrow>
          )}
        </StyledPatchSelectorArrowContainer>

        {`Parche ${selectedPatch.name}`}

        <StyledPatchSelectorArrowContainer>
          {patches[selectedPatchIndex + 1] && (
            <StyledPatchSelectorArrow onClick={nextPatchID}>
              {'>'}
            </StyledPatchSelectorArrow>
          )}
        </StyledPatchSelectorArrowContainer>
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
  text-align: center;
  gap: var(--space-xl);
  padding: var(--space-xl);
  color: white;
  font-size: 48px;
  font-weight: 700;
  user-select: none;
`;

const StyledPatchSelectorArrowContainer = styled.div`
  width: 40px;
  display: grid;
  place-items: center;
`;

const StyledPatchSelectorArrow = styled.span`
  cursor: pointer;

  &:hover {
    color: rgba(192, 192, 192);
  }
`;
