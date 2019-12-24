import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../components/Header';
import CardsArray from '../components/CardsArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { searchAction, requestAction } from '../modules/actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchReducer.searchField,
    robots: state.requestReducer.robots,
    isPending: state.requestReducer.isPending,
    error: state.requestReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(searchAction(event.target.value)),
    onRequestRobots: () => dispatch(requestAction()) //needs redux-thunk, otherwise it expects an obj
  }
}

class App extends React.Component {
  
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange , robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='text-center'>
        <Header />
        <SearchBox onSearchChange={onSearchChange}/>
        {
          isPending 
            ? <h2>Loading...</h2>
            : <Scroll>
                {/* <ErrorBoundry> */}
                  <CardsArray robots={filteredRobots} />
                {/* </ErrorBoundry> */}
              </Scroll>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
