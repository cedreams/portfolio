import { keyframes } from "@emotion/react";

const blurFadeOut = keyframes`
  from {
    filter: blur(3px);
  }
  to {
    filter: blur(0px);
  }
`;

export default blurFadeOut;