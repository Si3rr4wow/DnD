import React, { Suspense } from 'react';

import { Canvas } from 'react-three-fiber'

import { Die, Loading } from '../three'
import Quote from './quote-generator'

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
    showGradient ? 'linear-gradient(180deg, #3c3c3c, transparent);' : ''
  )}
`

const Jumbotron = styled.div`
  padding: 2rem;
  margin: auto;
  border-radius: 10px;
  border: 1px solid #b5b5b5;
  box-shadow: 0px 3px 5px 0px #27272740;
  display: flex;
  flex-direction: column;

  user-select: none;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 5rem;
    text-align: center;
  }
  div {
    margin: auto;
  }
`

function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <Overlay showGradient>
          <div style={{ color: 'white', display: 'flex', height: '100%' }}>
            <Jumbotron style={{ width: '575px', height: '250px' }}>
              <h1>
                Roll the Bones
              </h1>
              <Quote/>
            </Jumbotron>
          </div>
        </Overlay>
        <Canvas colorManagement style={{ background: "#aaa" }}>
          <ambientLight />
          <pointLight position={[-20, 20, 10]} intensity={2} color={0x81f7f7}/>
          <pointLight position={[20, 20, 10]} intensity={2} color={0xf781c2}/>
          <Suspense fallback={Loading}>
            <Die sides="4" position={[-3, 0, 0]}/>
            <Die sides="6" position={[-1, 0, 0]}/>
            <Die sides="12" position={[+1, 0, 0]}/>
            <Die sides="20" position={[+3, 0, 0]}/>
          </Suspense>
        </Canvas>
        <Underlay showGradient>
          <div style={{ color: '#3a3a3a', display: 'flex', height: '100%' }}>
            <p>
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            </p>
          </div>
        </Underlay>
      </div>
    </>
  );
}

export default App;
