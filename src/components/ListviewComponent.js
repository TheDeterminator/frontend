import React from 'react';
import styled from 'styled-components';

const ListviewComponentContainer = styled.div`
  width: 650px;
  height: 175px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`
const ImageContainer = styled.div`
  width: 175px;
  height: 175px;
  border-right: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListviewComponent = () => {
  return (
    <ListviewComponentContainer>
      <ImageContainer>Picture</ImageContainer>
      <div>
        <h1>Title</h1>
        <h2>Country</h2>
        <p>Story Preview</p>
      </div>
    </ListviewComponentContainer>
  );
}

export default ListviewComponent;
