import React from 'react';
import {connect} from 'react-redux';
import {getCoordinatorStories, updateStory} from '../actions';
import styled from 'styled-components';

const StoryContainer = styled.div`
  max-width: 800px;
  widht: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 150px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 325px;
  justify-content: space-between;
`
const DescriptionEdit = styled.textarea`
  width: 800px;
  height: 400px;
  border: none;
  border-radius: 5px;
`

class StoryViewCoordinator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seletedStory: {},
      story: {
        title: ``,
        description: ``
      },
      edit: false
    }
  }

  changeHandler = e => {
    this.setState({story: {...this.state.story ,[e.target.name] : e.target.value}})
  }

  componentDidMount(){
    const currentStory = this.props.coordinatorStories.filter(story => story.id === Number(this.props.match.params.id));
    this.setState({
      seletedStory: currentStory[0]
    });
  }

  editStory = e => {
    this.setState({
      edit: true,
      story: {
        title: this.state.seletedStory.title,
        description: this.state.seletedStory.description
      }
    });
  }

  saveStory = e => {
    this.props.updateStory(this.state.seletedStory.id, this.state.story);
    this.setState({
      edit: false
    });
  }

  render(){
    return (
      <Background>
        <ImageBanner src={this.state.seletedStory.large_image}/>
        {!this.state.edit ? <StoryContainer>
          <h1>{this.state.seletedStory.title}</h1>
          <h2>{this.state.seletedStory.country}</h2>
          <p>{this.state.seletedStory.description}</p>
          <ButtonContainer>
            <Button onClick={this.editStory}>Edit</Button>
            <Button>Delete</Button>
          </ButtonContainer>
        </StoryContainer> :
        <StoryContainer>
          <form>
            <input onChange={this.changeHandler} name='title' value={this.state.story.title} />
            <DescriptionEdit onChange={this.changeHandler} name='description' value={this.state.story.description}></DescriptionEdit>
            <Button onClick={this.saveStory}>Save</Button>
          </form>
        </StoryContainer>}
      </Background>
    );
  }
}

const mstp = (state) => {
  return {
    coordinatorStories: state.coordinatorStories
  };
}
export default connect(mstp, {getCoordinatorStories: getCoordinatorStories, updateStory: updateStory})(StoryViewCoordinator);
