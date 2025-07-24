import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import { Camera } from 'iconoir-react';
import img1 from '../assets/D5E20DE1-4B9A-43CF-8CE5-A52616FDF6B6.JPG';
import img2 from '../assets/58792A44-24FB-4803-AE41-03C2FCD0ABDF.JPG';
import img3 from '../assets/84ABD0DC-2E8C-416B-BB79-558CA8388542.JPG';
import img4 from '../assets/5D4D4935-F9C4-4380-A88A-F0B8E134A8B2.JPG';

const GalleryGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
  align-items: center;
`;

const GalleryImg = styled.img`
  width: 100%;
  max-width: 340px;
  height: 480px;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  transition: transform 0.2s;
  background: #eee;
  &:hover {
    transform: scale(1.03) rotate(-1deg);
    box-shadow: 0 6px 24px rgba(0,0,0,0.18);
  }
`;

const Gallery = () => (
  <Slide direction="right">
    <h2><Camera color="#f9d423" width={28} style={{marginRight: 8}} />Birthday Gallery</h2>
    <GalleryGrid>
      <GalleryImg src={img1} alt="Birthday memory 1" />
      <GalleryImg src={img2} alt="Birthday memory 2" />
      <GalleryImg src={img3} alt="Birthday memory 3" />
      <GalleryImg src={img4} alt="Birthday memory 4" />
    </GalleryGrid>
  </Slide>
);

export default Gallery; 