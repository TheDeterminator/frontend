import React from 'react';
import styled from 'styled-components';

const ListviewComponentContainer = styled.div`
  max-width: 650px;
  width: 100%:
  height: 175px;
  border: 1px solid #FF7F50;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  background-color: #D1DAE5;
  margin-top: 10px;
  margin-bottom: 10px;
`
const ImageContainer = styled.div`
  width: 25%;
  border-right: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Description = styled.div`
  width: 80%;
  height: 75px;
  text-overflow: ellipsis;
  overflow: hidden;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 75%;
`

const ListviewComponent = (props) => {
  return (
    <ListviewComponentContainer>
      <ImageContainer>Picture</ImageContainer>
      <ContentContainer>
        <div>{props.story.title}</div>
        <div>{props.story.country}</div>
        <Description>
          <p>{props.story.description}</p>
        </Description>
      </ContentContainer>
    </ListviewComponentContainer>
  );
}

export default ListviewComponent;
