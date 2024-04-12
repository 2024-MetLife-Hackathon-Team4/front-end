import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../../apis";

function Category() {
  const [buttonsData, setButtonsData] = useState([]);

  const getData = async () => {
    const res = await instance.get(`insurance-categories`);
    setButtonsData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledWrapper>
      <StyledDataWrapper>
        {buttonsData.map((button, index) => (
          <StyledButton key={index}>{button.name}</StyledButton>
        ))}
      </StyledDataWrapper>
    </StyledWrapper>
  );
}

export default Category;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 500px;
`;

const StyledButton = styled.button`
  all: unset;
  padding: 20px 40px;
  margin: 10px;
  font-size: 18px;
  background-color: #4d416d;
  color: white;
  border-radius: 5px;
  flex: 1 0 40%;
`;
