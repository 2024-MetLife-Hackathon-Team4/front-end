import styled from "styled-components";

function Input({
  content,
  handleTypingContent,
  handleFinallyContent,
  setTypingContent,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setTypingContent("");
  }

  return (
    <StyledWrapper onSubmit={handleSubmit}>
      <StyledInputWrapper
        placeholder="검색어를 입력하세요."
        value={content}
        onChange={handleTypingContent}
      />
      <StyledSendBtn onClick={handleFinallyContent}>➤</StyledSendBtn>
    </StyledWrapper>
  );
}

export default Input;

const StyledWrapper = styled.form`
  position: absolute;
  right: 170px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 15px;
  gap: 10px;
`;

const StyledInputWrapper = styled.input`
  all: unset;
  width: 60%;
  height: 50px;
  border-radius: 8px;
  background-color: #f4f7fb;

  padding: 0 20px;
  font-size: 0.9rem;
  letter-spacing: 0.2px;
`;

const StyledSendBtn = styled.button`
  display: flex;
  border-radius: 30%;
  background-color: #3aa58b;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 15px;
`;
