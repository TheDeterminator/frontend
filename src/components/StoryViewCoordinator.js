import React from 'react';
import {connect} from 'react-redux';
import {getCoordinatorStories} from '../actions';
import styled from 'styled-components';

const StoryContainer = styled.div`
  max-width: 800px;
  widht: 100%;
  margin: 0 auto;
`
const ImageBanner = styled.img`
  width: 800px;
  height: 300px;
  object-fit: cover;
  margin: 0 auto;
  margin-top: 20px;
`
const Background = styled.div`
  max-width: 1000px;
  background-color: #D1DAE5;
  margin: 0 auto;
`
const Button = styled.button`
  font-size: 24px;
  border: 1px solid black;
  border-radius: 25px;
  margin-top: 25px;
  background-color: #FF7F50;
`

class StoryViewCoordinator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seletedStory: {}
    }
  }

  componentDidMount(){
    const currentStory = this.props.coordinatorStories.filter(story => story.id === Number(this.props.match.params.id));
    this.setState({
      seletedStory: currentStory[0]
    });
  }

  render(){
    return (
      <Background>
        <ImageBanner src={this.state.seletedStory.image}/>
        <StoryContainer>
          <h1>{this.state.seletedStory.title}</h1>
          <h2>{this.state.seletedStory.country}</h2>
          <p>{this.state.seletedStory.description}</p>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </StoryContainer>
      </Background>
    );
  }
}

const mstp = (state) => {
  return {
    coordinatorStories: state.coordinatorStories
  };
}
export default connect(mstp, {getCoordinatorStories: getCoordinatorStories})(StoryViewCoordinator);
