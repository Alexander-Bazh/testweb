import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

function Team() {
  return (
    <TeamContainer>
      <h1>Наша команда</h1>
      <TeamGrid>
        {/* Здесь будут карточки тренеров */}
      </TeamGrid>
    </TeamContainer>
  );
}

export default Team; 