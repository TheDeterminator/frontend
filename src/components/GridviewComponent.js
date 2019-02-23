import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import theme from '../design/theme';

const ListviewComponentContainer = styled.div`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 25px 25px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 
  0 7px 20px 0 rgba(0, 0, 0, 0.17);    
`
const ImageContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  
  background-color: ${theme.color.primaryBgShading};
`
const Description = styled.p`
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

class GridviewComponent extends React.Component {

  render(){
    let storyContent = this.props.story.description;
    if(this.props.story.description.length > 200){
      storyContent = storyContent.substring(0,200) + '...'
    }
    return (
      <div>
        <Link to={`/home/donor/story/${this.props.story.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <ListviewComponentContainer>
            <ImageContainer><Image src={this.props.story.large_image}/></ImageContainer>
            <Content>
              <div>{this.props.story.title}</div>
              <Description>{storyContent}</Description>
            </Content>
          </ListviewComponentContainer>
        </Link>
      </div>
    );
  }
}

export default GridviewComponent;
