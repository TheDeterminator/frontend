import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import {connect} from 'react-redux';
import {deleteStory} from '../actions';

const ListviewComponentContainer = styled.div`
  width: 650px;
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
    this.state = {
      open: false
    }
  }

  openStory = e => {
    this.setState({ open: true });
  }

  closeStory = e => {
    this.setState({ open: false })
  }

  render(){
    return (
      <div>
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
        <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeStory}>
          <h1>{this.props.story.title}</h1>
          <h2>{this.props.story.country}</h2>
          <p>{this.props.story.description}</p>
          <button>Edit</button>
          <button onClick={e => this.props.deleteStory(this.props.story.id)}>Delete</button>
        </Popup>
      </div>
    );
  }
}

export default connect(null, {deleteStory: deleteStory})(ListviewComponent);
