import styled from 'styled-components';
import CharacterCardAlternatives from './CharacterCardAlternatives/CharacterCardAlternatives';

import { ICharacter } from 'interfaces/interfaces';

const CharacterCard = ({
  character,
  size,
  showAlternatives = true,
  showHover = true,
}: {
  character: ICharacter;
  size: number;
  showAlternatives: boolean;
  showHover: boolean;
}) => {
  const { name, element, alternatives } = character;
  const characterSrc: string = `/assets/images/characters/${name}.png`;
  const elementSrc = `/assets/images/elements/${element}.png`;

  return (
    <CharacterCardContainer size={size} element={element} showHover={showHover}>
      <CharacterCardImage
        src={characterSrc}
        alt={name}
        height={size}
        width={size}
        element={element}
      />

      {alternatives && showAlternatives && (
        <CharacterCardAlternatives
          numAlternatives={alternatives.length}
          element={element}
        />
      )}

      <CharacterCardElement
        src={elementSrc}
        alt={element}
        height={size / 5}
        width={size / 5}
        element={element}
      />
    </CharacterCardContainer>
  );
};

export default CharacterCard;

const CharacterCardContainer: any = styled.div`
  position: relative;
  height: ${({ size }: { size: number }) => `${size}px`};
  width: ${({ size }: { size: number }) => `${size}px`};
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: rgba(36, 36, 36);
  cursor: ${({ showHover }: any) => (showHover ? 'pointer' : 'default')};
  transition: 0.2s;

  &:hover {
    background-color: ${({ showHover, element }: any) =>
      showHover ? `var(--color-elements-${element}-light)` : ''};
  }
`;

const CharacterCardElement: any = styled.img`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 4px;
  background-color: rgba(48, 48, 48, 0.6);
  border-radius: 9999px;
`;

const CharacterCardImage: any = styled.img``;
