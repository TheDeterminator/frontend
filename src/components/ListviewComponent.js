import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';

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
          <div>
            <a onClick={this.closeStory}>
              &times;
            </a>
            <div>{this.props.story.title}</div>
            <div>{this.props.story.country}</div>
            <div>{this.props.story.description}</div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default ListviewComponent;
