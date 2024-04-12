import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import lottieData from "../../assets/lottieJSON/loading.json";
import { chat } from "../../mock/chat";
import { typingContentAtom } from "../../store/ai";
import Balloon from "../Balloon/index";
import Input from "../Input/index";
import LottieWrapper from "../LottieWrapper";

//* 사용자가 입력하며 ai와 소통하는 컴포넌트 결과 카드
function DataCard() {
  const [typingContent, setTypingContent] = useState("");
  const [finallyContent, setFinallyContent] = useRecoilState(typingContentAtom);
  const [userBalloonComponents, setUserBalloonComponents] = useState([]);
  const [isShow, setIsShow] = useState(true);
  const [chatIndex, setChatIndex] = useState(0);

  function handleTypingContent(e) {
    setTypingContent(e.target.value);
  }

  function handleFinallyContent() {
    setFinallyContent(typingContent);
  }

  useEffect(() => {
    if (finallyContent) {
      const newUserBalloon = (
        <Balloon
          key={userBalloonComponents.length}
          type="user"
          content={finallyContent}
        />
      );
      setUserBalloonComponents((prevComponents) => [
        ...prevComponents,
        newUserBalloon,
      ]);

      setTimeout(() => {
        setIsShow(false);
        const newAIBalloon = (
          <Balloon
            key={userBalloonComponents.length}
            type="ai"
            content={chat[chatIndex]}
          />
        );
        setUserBalloonComponents((prevComponents) => [
          ...prevComponents,
          newAIBalloon,
        ]);
        setIsShow(true);
        setChatIndex((prevIndex) => prevIndex + 1);
      }, 1500);
    }
  }, [finallyContent]);

  return (
    <StyledCardWrapper>
      <StyledInWrapper>
        <Balloon
          type="ai"
          content="안녕하세요! '언제나 당신 곁에, 더 든든한 미래를 위해' 매트라이프 입니다. 저희 서비스를 이용해주셔서 감사의 말씀 드립니다. 선택해주신 연금보험의 보험에 관해 질문해주세요."
        />
        {userBalloonComponents}
        {isShow && <LottieWrapper lottieData={lottieData} />}
      </StyledInWrapper>
      <Input
        content={typingContent}
        handleTypingContent={handleTypingContent}
        handleFinallyContent={handleFinallyContent}
        setTypingContent={setTypingContent}
      />
    </StyledCardWrapper>
  );
}
export default DataCard;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  width: 80%;
  height: 600px;
  padding: 30px 0px;
`;

const StyledInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 100%;
  max-height: 485px;
  overflow: auto;
`;
