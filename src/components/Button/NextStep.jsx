import styled from "styled-components";
import { metlifeUrl } from "../../constants/common";

// 보험 상품을 가입하러 가는 버튼입니다.
function NextStep() {
  return (
    <StyledWrapper href={metlifeUrl} target="_blank">
      해당 상품 가입하기 <span>➤</span>
    </StyledWrapper>
  );
}

export default NextStep;

const StyledWrapper = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #efa985;

  width: 250px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;
