import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

function Gallery() {
  return (
    <GalleryContainer>
      <h1>Галерея</h1>
      <PhotoGrid>
        {/* Здесь будут фотографии */}
      </PhotoGrid>
    </GalleryContainer>
  );
}

export default Gallery; 