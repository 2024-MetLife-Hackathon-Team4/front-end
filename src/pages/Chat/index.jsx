import styled from "styled-components";
import DataCard from "../../components/DataCard";
import BestCard from "../../components/DataCard/BestCard";
import Footer from "../../components/Footer";

function Chat() {
  return (
    <StyledWrapper>
      <StyledInWrapper>
        <DataCard />
        <BestCard />
      </StyledInWrapper>
      <Footer />
    </StyledWrapper>
  );
}

export default Chat;

const StyledWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  margin-top: 40px;
  gap: 40px;
`;
