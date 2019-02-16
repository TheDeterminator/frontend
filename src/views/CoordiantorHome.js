import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getGlobalStories} from '../actions'

import ListviewComponent from '../components/ListviewComponent';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class CoordinatorHome extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getGlobalStories();
  }

  render(){
    return (
      <div>
        <ListContainer>
          {this.props.globalStories.map(story => <ListviewComponent story={story}/>)}
        </ListContainer>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    globalStories: state.globalStories
  };
}

export default connect(mstp, {getGlobalStories: getGlobalStories})(CoordinatorHome)
