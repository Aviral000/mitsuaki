import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import { Spark } from 'iconoir-react';

const List = styled.ul`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const FunFacts = () => (
  <Slide direction="left">
    <h2><Spark color="#ff4e50" width={28} style={{marginRight: 8}} />Fun Facts About You</h2>
    <List>
      <li>Loves baseball and always ready for a game!</li>
      <li>Turns 14 today—officially a teenager!</li>
      <li>Known for your awesome sense of humor and kindness.</li>
      <li>Add your own fun facts here!</li>
    </List>
  </Slide>
);

export default FunFacts; 