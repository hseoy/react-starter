import styled, { css } from 'styled-components';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
`;

export default CenteredDiv;
