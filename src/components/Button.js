import styled from 'styled-components';

const getColorFromType = (props) => {
  if (props.disabled) return props.theme.colors.secondaryLight;
  if (props.type === 'primary') return props.theme.colors.main;
  if (props.type === 'secondary') return props.theme.colors.secondary;
  if (props.type === 'warn') return 'red';
  else return props.theme.colors.main;
};

export const Button = styled.button`
  background: transparent;
  color: ${(props) => getColorFromType(props)};
  border: 1px solid ${(props) => getColorFromType(props)};
  border-radius: 3px;
  padding: 5px;
`;
