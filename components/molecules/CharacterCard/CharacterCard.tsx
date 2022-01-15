import styled from 'styled-components';
import CharacterCardAlternatives from './CharacterCardAlternatives/CharacterCardAlternatives';

const CharacterCard = ({
  character,
  size,
  showAlternatives = true,
  showHover = true,
}: any) => {
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
  height: ${(props: any) => `${props.size}px`};
  width: ${(props: any) => `${props.size}px`};
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: rgba(36, 36, 36);
  cursor: ${(props: any) => (props.showHover ? 'pointer' : 'default')};
  transition: 0.2s;

  &:hover {
    background-color: ${(props: any) =>
      props.showHover ? `var(--color-elements-${props.element}-light)` : ''};
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
