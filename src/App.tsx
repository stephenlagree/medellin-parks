import { useState } from 'react'
import styled from '@emotion/styled'
import { Map } from './components/Map'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 2;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin: 0 0 10px 0;
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.2rem;
  margin: 0;
`;

const MapWrapper = styled.div`
  flex: 1;
  position: relative;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <Title>Medellín Parks Explorer</Title>
        <Subtitle>Discover the best parks and attractions in the City of Eternal Spring</Subtitle>
      </Header>
      <MapWrapper>
        <Map />
      </MapWrapper>
    </AppContainer>
  )
}

export default App
