import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { typingContentAtom } from ".";
import { PointWord } from "../../mock/word";
import theme from "../../styles/Theme/theme";
import NextStep from "../Button/NextStep";
import Stop from "../Button/Stop";

// 보험의 특장점을 보여줍니다.
function BestCard() {
  const [typingContent] = useRecoilState(typingContentAtom);
  const [userBalloonComponents, setUserBalloonComponents] = useState([]);

  useEffect(() => {
    if (PointWord.includes(typingContent)) {
      setUserBalloonComponents((prevComponents) => [
        ...prevComponents,
        <StyledCheckWrapper>
          <StyledCheck></StyledCheck>
          {typingContent}
        </StyledCheckWrapper>,
      ]);
    }
  }, [typingContent]);

  return (
    <StyledWrapper>
      <h1>MetLife 해당 보험 핵심 키워드</h1>
      {userBalloonComponents}
      <StyledBtnWrapper>
        <NextStep />
        <Stop />
      </StyledBtnWrapper>
    </StyledWrapper>
  );
}

export default BestCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #3b3b3b;
  background-color: #ffffff;
  border-radius: 10px;
  width: 25%;
  height: 600px;
  padding: 17px 15px;

  h1 {
    font-weight: ${theme.fontWeight.bold};
    font-size: 1.2rem;
    letter-spacing: 0.2px;
    margin-bottom: 10px;
  }
  p {
    font-weight: ${theme.fontWeight.light};
    font-size: 1.1rem;
    letter-spacing: 0.2px;
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

const StyledCheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  font-weight: ${theme.fontWeight.normal};
  font-size: 0.9rem;
`;

const StyledCheck = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #efa985;
  margin-right: 10px;
  animation: blink-effect 0.1s step-end;

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;
