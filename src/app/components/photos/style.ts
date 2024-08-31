import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrapperDiv = styled(motion.div)`
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

export const SliderDiv = styled(motion.div)`
  display: flex;
  gap: 10px;
  user-select: none;
`;

export const SlideDiv = styled(motion.div)`
  width: 128px;

  & > img {
    border-radius: 1rem;
  }
`;
