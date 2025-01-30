import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrapperDiv = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  touch-action: none;
`;

export const SliderDiv = styled(motion.div)`
  display: flex;
  gap: 12px;
  user-select: none;
`;

export const SlideDiv = styled.div`
  width: 128px;

  & > img {
    border-radius: 1rem;
    pointer-events: none;
  }
`;
