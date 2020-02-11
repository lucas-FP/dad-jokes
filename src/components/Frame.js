import styled from 'styled-components';

export const Frame = styled.div`
  background: ${(props) => props.theme.colors.secondLight};
  display: flex;
  flex-direction: ${(props) => props.direction};
  border-radius: 10px;
  padding: 30px 5%;
  margin: 10px 5%;
`;
