import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>Работай до тех пор, пока твои кумиры не станут твоими соперниками!</Title>
        <Description>
        Благодаря сплаву опыта и молодости нашего тренерского состава занятия проходят в лучших традициях отечественного хоккея с добавлением самых современных методик.
        В таком возрасте важно поставить правильную технику катания на коньках. Это фундамент, на котором строятся остальные навыки в юном хоккеисте. Игрок, идеально владеющий техникой, катается эффективнее и меньше устает. Но также важно, чтобы ребенок развивался всесторонне и не терял интерес к занятиям, поэтому тренировочный процесс нашей школы включает в себя комплексный подход: занятия на льду, в спортивном зале и в бросковой зоне. На льду наши профессиональные тренеры научат держать равновесие и сохранять устойчивость, помогут освоить навыки правильного скольжения. Занятия в зале ориентированы на развитие координации, быстроты, ловкости и игрового мышления. В бросковой зоне будущие хоккеисты развивают технику владения клюшкой со специальными шайбами, мячами, змейками и мишенями.
        </Description>
      </HeroSection>
    </HomeContainer>
  );
}

export default Home; 