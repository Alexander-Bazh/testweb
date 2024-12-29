import React from 'react';
import styled from 'styled-components';

const ContactsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
`;

function Contacts() {
  return (
    <ContactsContainer>
      <h1>Контакты</h1>
      <ContactInfo>
        <ContactItem>
          <h3>Адрес:</h3>
          <p>Москва, ...</p>
        </ContactItem>
        <ContactItem>
          <h3>Телефон:</h3>
          <p>+7 (XXX) XXX-XX-XX</p>
        </ContactItem>
        <ContactItem>
          <h3>Email:</h3>
          <p>info@trutkohockey.com</p>
        </ContactItem>
      </ContactInfo>
    </ContactsContainer>
  );
}

export default Contacts; 