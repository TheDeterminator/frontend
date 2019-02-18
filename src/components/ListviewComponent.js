import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteStory} from '../actions';
import {Link} from 'react-router-dom';

const ListviewComponentContainer = styled.div`
  width: 650px;
  height: 175px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  background-color: #D1DAE5;
  margin-top: 10px;
  margin-bottom: 10px;
`
const ImageContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Description = styled.p`
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
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

class ListviewComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Link to={`/home/coordinator/story/${this.props.story.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <ListviewComponentContainer onClick={this.openStory}>
            <ImageContainer><Image src={this.props.story.image}/></ImageContainer>
            <ContentContainer>
              <div>{this.props.story.title}</div>
              <div>{this.props.story.country}</div>
              <Description>
                {this.props.story.description}
              </Description>
            </ContentContainer>
          </ListviewComponentContainer>
        </Link>
      </div>
    );
  }
}

export default connect(null, {deleteStory: deleteStory})(ListviewComponent);
