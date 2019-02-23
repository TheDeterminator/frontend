import React from 'react';
import {connect} from 'react-redux';
import {getStoryByID} from '../actions';
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
  width: 150px;
`

class StoryViewDonorV2 extends React.Component {
  constructor(props){
    super(props);
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

  render(){
    return (
      <div>
      {this.props.storyByID ? <Background>
        <ImageBanner src={this.props.storyByID.large_image}/>
        <StoryContainer>
          <h1>{this.props.storyByID.title}</h1>
          <h2>{this.props.storyByID.country}</h2>
          <p>{this.props.storyByID.description}</p>
          <Button>Donate</Button>
        </StoryContainer>
      </Background> : <div>Loading Data...</div>}
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    storyByID: state.storyByID
  };
}
export default connect(mstp, {getStoryByID: getStoryByID})(StoryViewDonorV2);
