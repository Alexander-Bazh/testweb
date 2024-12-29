import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #444;
  }
`;

function LoginForm({ onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log('Login attempt:', formData);
  };

  return (
    <Modal onClick={onClose}>
      <Form onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Вход в систему</h2>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={e => setFormData({...formData, password: e.target.value})}
        />
        <SubmitButton onClick={handleSubmit}>Войти</SubmitButton>
      </Form>
    </Modal>
  );
}

export default LoginForm; 