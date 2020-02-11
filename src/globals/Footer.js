import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondLight};
  height: 40px;
  padding: 5px 0;
`;

const AuthorSpan = styled.span`
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
