import React from 'react';
import { Header, Footer, theme, GlobalStyles } from './globals';
import styled, { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';
import { Home, Random, Search } from './pages';

const RouterWrapper = styled.div`
  min-height: calc(100vh - 90px);
  padding: 1px 0;
  background: ${(props) => props.theme.colors.second};
`;

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <ThemeProvider theme={theme || {}}>
        <Header />
        <RouterWrapper>
          <Router>
            <Home path="/" />
            <Random path="/random" />
            <Search path="/search" />
            <Search path="/search/:searchTerm" />
          </Router>
        </RouterWrapper>
        <Footer author="Lusca" />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
