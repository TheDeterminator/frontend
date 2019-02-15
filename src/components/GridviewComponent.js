import React from 'react';
import styled from 'styled-components';

const ListviewComponentContainer = styled.div`
  width: 175px;
  height: 175px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`
const ImageContainer = styled.div`
  width: 175px;
  height: 50px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  width: 175px;
  height: 125px;
`
const Title = styled.h1`
  display: flex;
  align-self: flex-start;
`

const GridviewComponent = () => {
  return (
    <ListviewComponentContainer>
      <ImageContainer>Picture</ImageContainer>
      <Content>
        <Title>Title</Title>
        <p>Story Preview</p>
      </Content>
    </ListviewComponentContainer>
  );
}

export default GridviewComponent;
