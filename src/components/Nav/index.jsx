import styled from "styled-components";
import theme from "../../styles/Theme/theme";

function Nav() {
  return (
    <StyledWrapper>
      <StyledLogoWrapper>
        <img src="/assets/images/logo.png" alt="로고" width={30} height={30} />
        <span>MetLife</span>
      </StyledLogoWrapper>
    </StyledWrapper>
  );
}

export default Nav;

const StyledWrapper = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 20px;
  padding: 32px 25px;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  color: white;
  gap: 4px;
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.6rem;

  span {
    margin-top: 3px;
  }
`;
