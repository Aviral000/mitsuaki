import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Hero from './components/Hero';
import FunFacts from './components/FunFacts';
import Gallery from './components/Gallery';
import MessageBoard from './components/MessageBoard';
import './App.css';

const Section = styled.section`
  margin: 3rem 0;
  padding: 2rem;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  color: #222;
`;

function App() {
  const [width, height] = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height} numberOfPieces={350} recycle={true} />
      <Hero />
      <Section>
        <FunFacts />
      </Section>
      <Section>
        <Gallery />
      </Section>
      <Section>
        <MessageBoard />
      </Section>
    </div>
  );
}

export default App;
