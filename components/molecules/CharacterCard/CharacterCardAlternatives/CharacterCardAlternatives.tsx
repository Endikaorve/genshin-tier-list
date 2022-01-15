import styled from 'styled-components';

const CharacterCardAlternatives = ({
  numAlternatives,
  element,
}: {
  numAlternatives: number;
  element: string;
}) => (
  <CharacterCardAlternativesBadge element={element}>
    +{numAlternatives}
  </CharacterCardAlternativesBadge>
);

export default CharacterCardAlternatives;

const CharacterCardAlternativesBadge: any = styled.span`
  width: 25%;
  height: 25%;
  background-color: ${(props: any) => `var(--color-elements-${props.element})`};
  position: absolute;
  right: 4px;
  top: 4px;
  border-radius: 9999px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 700;
  color: rgb(48, 48, 48);
`;
