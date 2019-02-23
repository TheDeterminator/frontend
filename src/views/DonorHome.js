import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getGlobalStories} from '../actions';
import GridviewComponent from '../components/GridviewComponent';
import { withRouter } from 'react-router-dom';

const GridviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
`

class DonorHome extends React.Component {

  componentDidMount(){
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
          Authorization: token,
      }
    }

    this.props.getGlobalStories(options);
  }

  render(){
    return (
      <div>
        {!this.props.loading ? <GridviewContainer>
          {this.props.globalStories.map(story => <GridviewComponent key={story.id} story={story}/>)}
        </GridviewContainer> : <div>Loading Data...</div>}
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    globalStories: state.globalStories,
    loading: state.loading
  };
}

export default withRouter(connect(mstp, {getGlobalStories: getGlobalStories})(DonorHome));
