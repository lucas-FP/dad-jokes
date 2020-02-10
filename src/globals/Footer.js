import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.second};
  height: 40px;
  padding: 5px;
  color: ${(props) => props.theme.colors.secondLight};
`;

const AuthorSpan = styled.span`
  color: ${(props) => props.theme.colors.secondLighter};
  float: right;
`;

export function Footer(props) {
  const { author } = props;
  return (
    <FooterContainer className="App-header">
      <AuthorSpan>Desenvolvido por {author}</AuthorSpan>
    </FooterContainer>
  );
}
