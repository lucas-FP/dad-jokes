import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/icon.png';
import { Link } from '@reach/router';

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.secondLight};
  height: 50px;
  display: flex;
`;

const SmallImage = styled.img`
  height: 40px;
  width: 40px;
  margin: 5px 15px;
`;

const FlexNav = styled.nav`
  display: flex;
  flex: 1;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin: auto 15px 5px 15px;
  &:hover {
    color: ${(props) => props.theme.colors.mainLight};
    border-bottom: solid 2px ${(props) => props.theme.colors.main};
  }
`;

export function Header(props) {
  return (
    <HeaderContainer className="App-header">
      <SmallImage src={Icon} />
      <FlexNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/random">Random</NavLink>
        <NavLink to="/search">Search</NavLink>
      </FlexNav>
    </HeaderContainer>
  );
}
