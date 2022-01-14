import styled from 'styled-components';
import CharacterCardAlternatives from './CharacterCardAlternatives/CharacterCardAlternatives';

const CharacterCard = ({ character }: any) => {
  const { name, element, alternatives } = character;
  const src: string = `/assets/images/characters/${name}.png`;
  const elementSrc = `/assets/images/elements/${element}.png`;
  const alt: string = name.toLowerCase();
  const size: number = 90;

  return (
    <CharacterCardContainer element={element} size={size}>
      <CharacterCardImage
        src={src}
        alt={alt}
        height={size}
        width={size}
        element={element}
      />

      {alternatives && (
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
  /* border: ${(props: any) =>
    `1px solid var(--color-elements-${props.element})`}; */
  background-color: rgba(36, 36, 36);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props: any) =>
      `var(--color-elements-${props.element}-light)`};
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
