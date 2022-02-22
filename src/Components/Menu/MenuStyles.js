import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: absolute;
  bottom: 0;

  height: calc(15% - 2rem);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(450px - 2rem);

  @media (max-width: 480px) {
    width: calc(100% - 2rem);
    min-width: 100px;
  }
`;

export default MenuWrapper;
