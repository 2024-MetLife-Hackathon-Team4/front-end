import Lottie from "lottie-react";
import React from "react";
import styled from "styled-components";

function LottieWrapper({ lottieData }) {
  return (
    <StyledWrapper animationData={lottieData} loop={true} autoplay={true} />
  );
}

export default LottieWrapper;

const StyledWrapper = styled(Lottie)`
  width: 130px;
  height: 130px;
`;
