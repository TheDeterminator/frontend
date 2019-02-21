import React from 'react';
import {connect} from 'react-redux';
import {getStoryByID, updateStory} from '../actions';
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
    this.props.getStoryByID(this.props.match.params.id);
  }

  editStory = e => {
    this.setState({
      edit: true
    });
  }

  saveStory = e => {
    this.props.updateStory(this.props.storyByID.id, this.state.story);
    this.setState({
      edit: false
    });
  }

  render(){
    return (
      <Background>
        {this.props.storyByID ? <div><ImageBanner src={this.props.storyByID.large_image}/>
        {!this.state.edit ? <StoryContainer>
          <h1>{this.props.storyByID.title}</h1>
          <h2>{this.props.storyByID.country}</h2>
          <p>{this.props.storyByID.description}</p>
          <ButtonContainer>
            <Button onClick={this.editStory}>Edit</Button>
            <Button>Delete</Button>
          </ButtonContainer>
        </StoryContainer> :
        <StoryContainer>
          <form>
            <input onChange={this.changeHandler} name='title' value={this.props.storyByID.title} />
            <DescriptionEdit onChange={this.changeHandler} name='description' value={this.props.storyByID.description}></DescriptionEdit>
            <Button onClick={this.saveStory}>Save</Button>
          </form>
        </StoryContainer>}</div> : <div>Loading Data...</div>}
      </Background>
    );
  }
}

const mstp = (state) => {
  return {
    storyByID: state.storyByID
  };
}
export default connect(mstp, {getStoryByID: getStoryByID, updateStory: updateStory})(StoryViewCoordinator);
