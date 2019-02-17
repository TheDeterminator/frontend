import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';

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
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

class GridviewComponent extends React.Component {
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
        <Link to={`/home/donor/story/${this.props.story.id}`}>
          <ListviewComponentContainer onClick={this.openStory}>
            <ImageContainer><Image src={this.props.story.image}/></ImageContainer>
            <Content>
              <div>{this.props.story.title}</div>
              <Description>{this.props.story.description}</Description>
            </Content>
          </ListviewComponentContainer>
        </Link>
        <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeStory}>
          <div>
            <div>{this.props.story.title}</div>
            <div>{this.props.story.country}</div>
            <div>{this.props.story.description}</div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default GridviewComponent;
