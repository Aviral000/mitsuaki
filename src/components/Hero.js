import React, { useRef, useEffect } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; // as balloon/party
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import StarIcon from '@mui/icons-material/Star';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import gsap from 'gsap';

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f9d423 0%, #ff4e50 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px #ff4e50;
  display: flex;
  align-items: center;
`;

const BallAnim = styled.div`
  position: absolute;
  left: 10vw;
  top: 30vh;
  z-index: 2;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  text-align: center;
`;

function AnimatedBall() {
  const ballRef = useRef();
  useEffect(() => {
    gsap.to(ballRef.current, {
      y: -120,
      x: 400,
      rotation: 360,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5,
    });
  }, []);
  return (
    <BallAnim ref={ballRef}>
      <SportsBaseballIcon style={{ fontSize: 60, color: '#fff', filter: 'drop-shadow(0 2px 8px #ff4e50)' }} />
    </BallAnim>
  );
}

const Hero = () => (
  <HeroSection>
    <Fade cascade>
      <Title>
        <EmojiEmotionsIcon style={{ fontSize: 48, marginRight: 12 }} />
        Happy 14th Birthday, Champ!
        <EmojiEmotionsIcon style={{ fontSize: 48, marginLeft: 12 }} />
      </Title>
      <AnimatedBall />
      <Message>
        <StarIcon style={{ fontSize: 32, marginBottom: -8 }} />
        <br />
        Wishing you a home run year ahead! May your dreams soar as high as your baseballs. Enjoy your special day to the fullest!
      </Message>
    </Fade>
  </HeroSection>
);

export default Hero; 