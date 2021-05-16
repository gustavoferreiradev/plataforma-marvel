import React from "react";
import styled from "styled-components";
import "./App.css";

const AppWrapper = styled.div`
  text-align: left;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src="/images/logo.svg" alt="logo" title="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppWrapper>
  );
};

export default App;
