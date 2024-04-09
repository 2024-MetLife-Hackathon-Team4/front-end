import { motion } from "framer-motion";
import styled from "styled-components";
import { defaultFadeInUpVariants } from "../../constants/motion";

// AI의 메세지를 담는 말풍선입니다.
function Balloon({ type = "ai" | "user", content }) {
  return (
    <>
      {type === "ai" ? (
        <StyledBalloonWrapper>
          <StyledProfileWrapper>
            <img
              src="/assets/images/logo.png"
              alt="매트라이프 프로필"
              width={40}
              height={40}
            />
          </StyledProfileWrapper>
          <StyledWrapper
            initial="initial"
            animate="animate"
            exit="exit"
            variants={defaultFadeInUpVariants}
          >
            {content}
          </StyledWrapper>
        </StyledBalloonWrapper>
      ) : (
        <StyledUserBalloon>{content}</StyledUserBalloon>
      )}
    </>
  );
}

export default Balloon;

const StyledWrapper = styled(motion.div)`
  position: relative;
  margin: 0 50px;
  padding: 20px;
  max-width: 500px;
  min-height: 100px;
  color: #737475;
  overflow: auto;

  background-color: #f4f7fb;
  border-radius: 1px 14px 14px 14px;
  font-size: 1.1rem;
  margin-bottom: 12px;
`;

const StyledUserBalloon = styled(StyledWrapper)`
  max-width: 500px;
  min-height: 100px;
  background-color: #4d416d;
  color: #e1dfe8;
  border-radius: 14px 1px 14px 14px;
  overflow: auto;
  margin-left: 500px;
`;

const StyledBalloonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-left: 20px;
  background-color: #f4f7fb;
`;
