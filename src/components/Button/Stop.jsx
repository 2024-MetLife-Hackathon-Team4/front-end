import styled from "styled-components";
import theme from "../../styles/Theme/theme";

// 그만보기 위한 버튼입니다.
function Stop() {
  return <StyledWrapper>그만 보기</StyledWrapper>;
}

export default Stop;

const StyledWrapper = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #757575;
  width: 250px;
  padding: 11px;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    background-color: #515151;
    transition: 0.2s all;
    cursor: pointer;
    font-weight: ${theme.fontWeight.bold};
  }
`;
