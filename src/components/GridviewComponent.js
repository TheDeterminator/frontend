import React from 'react';
import styled from 'styled-components';

const ListviewComponentContainer = styled.div`
  width: 175px;
  height: 175px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 25px 25px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 125px;
`
const Description = styled.p`
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
`

const GridviewComponent = (props) => {
  return (
    <ListviewComponentContainer>
      <ImageContainer>Picture</ImageContainer>
      <Content>
        <div>{props.story.title}</div>
        <Description>{props.story.description}</Description>
      </Content>
    </ListviewComponentContainer>
  );
}

export default GridviewComponent;
