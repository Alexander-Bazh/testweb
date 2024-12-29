import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.isLoading ? 1 : 0};
  visibility: ${props => props.isLoading ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
`;

const LoaderImage = styled.img`
  height: 200px;
  animation: pulse 1.5s ease-in-out infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.8;
    }
  }
`;

function Loader({ isLoading }) {
  return (
    <LoaderOverlay isLoading={isLoading} data-loader>
      <LoaderImage src={logo} alt="Loading..." />
    </LoaderOverlay>
  );
}

export default Loader; 