import styled from 'styled-components';

const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  border-radius: 100%;
  background-color: white;
  transition-duration: 0.1s;
  font-size: 2.5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  color: ${(props) => props.iconColor};
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.8);
  }
`;

export default ActionButtonContainer;
