import React, { Suspense } from 'react';

import { Canvas } from 'react-three-fiber'

import { Die, Loading } from '../three'
import {
  BorderDiv,
  Jumbotron,
  QuoteGenerator,
  UnstyledInput,
  GetWikiaArticle
} from '../components'

import styled from '@emotion/styled'

const Underlay = styled.div`
  position: absolute;
  top: 60%;
  height: 40%;
  width: 100%;

  background: ${({ showGradient }) => (
    showGradient ? 'linear-gradient(0, #fff, transparent);' : ''
  )}
`

const Overlay = styled.div`
  position: absolute;
  top: 0%;
  height: 40%;
  width: 100%;
  z-index: 1;

  background: ${({ showGradient }) => (
    showGradient ? 'linear-gradient(180deg, #222, transparent);' : ''
  )}
`

function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <Overlay showGradient>
          <BorderDiv style={{ margin: '1%', padding: '5px', color: 'white' }}>
            <UnstyledInput style={{ width: '100%', color: 'white' }}/>
          </BorderDiv>
          <GetWikiaArticle _id={6356}/>
          <div style={{ color: 'white', display: 'flex', height: '100%' }}>
            <Jumbotron style={{ width: '575px', height: '250px' }}>
              <h1>
                Roll the Bones
              </h1>
              <QuoteGenerator/>
            </Jumbotron>
          </div>
        </Overlay>
        <Canvas colorManagement style={{ background: "#aaa" }}>
          <ambientLight />
          <pointLight position={[-20, 20, 10]} intensity={2} color={0x81f7f7}/>
          <pointLight position={[20, 20, 10]} intensity={2} color={0xf781c2}/>
          <Suspense fallback={Loading}>
            <Die sides="4" position={[-4, 0, 0]}/>
            <Die sides="6" position={[-2, 0, 0]}/>
            <Die sides="8" position={[0, 0, 0]}/>
            <Die sides="12" position={[2, 0, 0]}/>
            <Die sides="20" position={[4, 0, 0]}/>
          </Suspense>
        </Canvas>
        <Underlay showGradient>
          <div style={{ color: '#3a3a3a', display: 'flex', height: '100%' }}>
            <p>
            </p>
          </div>
        </Underlay>
      </div>
    </>
  );
}

export default App;
