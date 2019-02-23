import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteStory} from '../actions';
import {Link} from 'react-router-dom';

import theme from '../design/theme';

const ListviewComponentContainer = styled.div`
  width: 650px;
  height: 175px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  background-color: ${theme.color.primaryBgShading};
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2),
  0 7px 20px 0 rgba(0, 0, 0, 0.17);
  &:hover {
    box-shadow: 0 5px 8px 0 rgba(19, 99, 168, 0.2),
    0 7px 20px 0 rgba(19, 99, 168, 0.17);
  }
`
const ImageContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Description = styled.p`
  width: 80%;
  overflow: hidden;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 75%;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

class ListviewComponent extends React.Component {

  render(){
    let storyContent = this.props.story.description;
    if(this.props.story.description.length > 200){
      storyContent = storyContent.substring(0,200) + '...'
    }
    return (
      <div>
        <Link to={`/home/coordinator/story/${this.props.story.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <ListviewComponentContainer onClick={this.openStory}>
            <ImageContainer><Image src={this.props.story.small_image}/></ImageContainer>
            <ContentContainer>
              <div>{this.props.story.title}</div>
              <div>{this.props.story.country}</div>
              <Description>
                {storyContent}
              </Description>
            </ContentContainer>
          </ListviewComponentContainer>
        </Link>
      </div>
    );
  }
}

export default connect(null, {deleteStory: deleteStory})(ListviewComponent);
