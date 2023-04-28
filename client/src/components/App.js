import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2> Dashboard </h2>;
const SurveyNew = () => <h2> SurveyNew </h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route exact path="/" element={<Landing />} />{' '}
              <Route path="/survey" element={<Dashboard />} />{' '}
              <Route path="/survey/new" element={<SurveyNew />} />{' '}
            </Routes>{' '}
          </div>{' '}
        </BrowserRouter>{' '}
      </div>
    );
  }
}

export default connect(null, actions)(App);
