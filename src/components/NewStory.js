import React from 'react';
import {connect} from 'react-redux';
import {newStory} from '../actions';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import theme from '../design/theme';
import LoginContainer from '../design/LoginContainer';
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
const Background = styled.div`
  max-width: 1000px;
  background-color: ${theme.color.primaryBgShading};
  margin: 0 auto;
`

const DescriptionEdit = styled.textarea`
  height: 400px;
`
const TitleEdit = styled.input`
  width: 800px;
  border: none;
  font-size: ${theme.fontSizing.sm};
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
    const token = localStorage.getItem('jwt');
    const userID = localStorage.getItem('user_id');
    const options = {
      headers: {
          Authorization: token,
      }
    }
    this.props.newStory(userID, this.state.story, options);
    this.props.history.push('/home/coordinator');
  }

  render(){
    return (
      <LoginContainer>
        <h1>New Story</h1>
        <Form onSubmit={this.saveStory}>
          <div>Title</div>
          <TitleEdit onChange={this.changeHandler} name='title' value={this.state.story.title} />
          <div>Description</div>
          <DescriptionEdit onChange={this.changeHandler} name='description' value={this.state.story.description}></DescriptionEdit>
          <Button type='submit'>Save</Button>
        </Form>
      </LoginContainer>
    );
  }
}

const mstp = state => {
  return ({
    user: state.user
  });
}

export default connect(mstp, {newStory: newStory})(NewStory);
