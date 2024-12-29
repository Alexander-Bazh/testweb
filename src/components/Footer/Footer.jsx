import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© 2024 TRUTKO. Все права защищены.</p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer; 