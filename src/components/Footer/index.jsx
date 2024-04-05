import styled from "styled-components";
import theme from "../../styles/Theme/theme";

function Footer() {
  return <StyledWrapper>매트라이프 보험 이해 AI 서비스</StyledWrapper>;
}

export default Footer;

const StyledWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
  font-size: 0.85rem;
  font-weight: ${theme.fontWeight.bold};
`;
