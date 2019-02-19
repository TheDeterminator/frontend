import React from 'react';
import {connect} from 'react-redux';
import {newStory} from '../actions';
import styled from 'styled-components';

const StoryContainer = styled.div`
  max-width: 800px;
  widht: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
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

class NewStory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      story: {
        title: ``,
        description: ``
      }
    }
  }

  changeHandler = e => {
    this.setState({story: {...this.state.story ,[e.target.name] : e.target.value}})
  }

  saveStory = e => {
    e.preventDefault();
    this.props.newStory('2', this.state.story);
  }

  render(){
    return (
      <Background>
        <StoryContainer>
          <form onSubmit={this.saveStory}>
            <input onChange={this.changeHandler} name='title' value={this.state.story.title} />
            <DescriptionEdit onChange={this.changeHandler} name='description' value={this.state.story.description}></DescriptionEdit>
            <Button type='submit'>Save</Button>
          </form>
        </StoryContainer>
      </Background>
    );
  }
}

export default connect(null, {newStory: newStory})(NewStory);
