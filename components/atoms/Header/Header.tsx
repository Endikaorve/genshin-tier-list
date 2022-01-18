import styled from 'styled-components';

const Header = () => (
  <StyledHeader>
    <StyledHeaderLogoImg src='/assets/images/logos/genshin-logo.png'></StyledHeaderLogoImg>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
`;

const StyledHeaderLogoImg = styled.img`
  width: 350px;

  @media (max-width: 576px) {
    width: 220px;
  }
`;
