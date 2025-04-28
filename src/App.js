import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Room from "./components/Room/Room";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/room/:roomId" component={Room} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
  background-color: #454552;
  text-align: center;
`;

export default App;

/*
Baje la version de node a 16.20.2 - v actual mia de node es v20.1.0
En el package.json cambie el proxy  "proxy": "http://localhost:3001"
*/
