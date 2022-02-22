import styled from 'styled-components';
import { motion } from 'framer-motion';

const MotionCard = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 450px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background-color:black;
  @media (max-width: 480px) {
    width: 100%;
    min-width: 100px;
  }
`;

const CardImage = styled.img`
  width:100%;
  @media (max-width: 480px) {
    height: 110%;
    width:auto;
  }
`;
const Header = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  height: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  overflow: hidden;
`;
const Text = styled.div`
  position: absolute;
  width: 100%;
  bottom: 22px;
  left: 22px;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;
const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 15%, rgba(255, 255, 255, 0) 25%);
`;

export {
  MotionCard, CardImage, Header, Text, GradientOverlay,
};
