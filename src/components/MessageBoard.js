import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import { ChatBubble } from 'iconoir-react';

const MessageBoardPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  color: #888;
  gap: 1rem;
  text-align: center;
`;

const birthdayMessages = [
  "Happy 14th Birthday, champ! 🎉",
  "Wishing you a year full of home runs, laughter, and amazing school memories.",
  "May your dreams be as big as your baseball swings!",
  "Keep believing in yourself, you’re growing into someone amazing.",
  "Your love for baseball shows your passion—never let it fade!",
  "Always stay curious, kind, and confident—just like today.",
  "I may not be your real brother, but I’ll always be your big bro and friend 💙",
  "Whenever you need someone to talk to or guide you—I’ll be there.",
  "Celebrate today like a true legend! You deserve it.",
  "Keep aiming high, and never stop being the awesome kid you are!"
];

const MessageBoard = () => (
  <Slide direction="up">
    <h2><ChatBubble color="#4e54c8" width={28} style={{ marginRight: 8 }} />Message Board</h2>
    <MessageBoardPlaceholder>
      {birthdayMessages.map((msg, idx) => (
        <p key={idx}>{msg}</p>
      ))}
    </MessageBoardPlaceholder>
  </Slide>
);

export default MessageBoard;
