import React from 'react';
import {connect} from 'react-redux';
import {getStoryByID, updateStory, deleteStory} from '../actions';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import theme from '../design/theme';
import Form from '../design/Form';
import Button from '../design/Button';

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
  background-color: ${theme.color.primaryBgShading};
  margin: 0 auto;
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
const BackButton = styled.div`
  display: flex;
  align-self: flex-start;
`

class StoryViewCoordinator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      story: {
        title: ``,
        description: ``
      },
      edit: false,
    }
  }

  changeHandler = e => {
    this.setState({story: {...this.state.story ,[e.target.name] : e.target.value}})
  }

  componentDidMount(){
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
          Authorization: token,
      }
    }
    this.props.getStoryByID(this.props.match.params.id, options);
  }

  editStory = e => {
    this.setState({
      edit: true,
      story: {
        title: this.props.storyByID.title,
        description: this.props.storyByID.description
      }
    });
  }

  saveStory = e => {
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
          Authorization: token,
      }
    }
    this.props.updateStory(this.props.storyByID.id, this.state.story, options);
    this.setState({
      edit: false
    });
    this.props.history.push(`/home/coordinator/story/${this.props.match.params.id}`);
  }

  deleteStory = e => {
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
          Authorization: token,
      }
    }
    this.props.deleteStory(this.props.storyByID.id, options);
    this.props.history.push(`/home/coordinator/`);
  }

  render(){
    return (
      <div>
      <BackButton>
      <Button onClick={()=>this.props.history.push('/home/coordinator')}>Back</Button>
      </BackButton>
      <Background>
        {this.props.storyByID ? <div><ImageBanner src={this.props.storyByID.large_image}/>
        {!this.state.edit ? <StoryContainer>
          <h1>{this.props.storyByID.title}</h1>
          <h2>{this.props.storyByID.country}</h2>
          <p>{this.props.storyByID.description}</p>
          <ButtonContainer>
            <Button onClick={this.editStory}>Edit</Button>
            <Button alert onClick={this.deleteStory}>Delete</Button>
          </ButtonContainer>
        </StoryContainer> :
        <StoryContainer>
          <Form>
            <input onChange={this.changeHandler} name='title' value={this.state.story.title} />
            <DescriptionEdit onChange={this.changeHandler} name='description' value={this.state.story.description}></DescriptionEdit>
            <Button onClick={this.saveStory}>Save</Button>
          </Form>
        </StoryContainer>}</div> : <div>Loading Data...</div>}
      </Background>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    storyByID: state.storyByID
  };
}
export default withRouter(connect(mstp, {getStoryByID: getStoryByID, updateStory: updateStory, deleteStory: deleteStory})(StoryViewCoordinator));
