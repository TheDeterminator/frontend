import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getGlobalStories} from '../actions';
import GridviewComponent from '../components/GridviewComponent';

const GridviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
`

class DonorHome extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const token = localStorage.getItem('jwt');
    const options = {
      header: {
        Authorization: token
      }
    }
    console.log(options);
    this.props.getGlobalStories(options);
    console.log(this.props.globalStories);
  }

  render(){
    return (
      <div>
        {this.props.globalStories ? <GridviewContainer>
          {this.props.globalStories.map(story => <GridviewComponent key={story.id} story={story}/>)}
        </GridviewContainer> : <div>Loading Data...</div>}
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    globalStories: state.globalStories,
    user: state.user
  };
}

export default connect(mstp, {getGlobalStories: getGlobalStories})(DonorHome);
