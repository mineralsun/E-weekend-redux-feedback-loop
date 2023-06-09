import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route,} from 'react-router-dom';
import HomePage from '../HomePage/HomePage.jsx';
import QuestionOne from '../QuestionOne/QuestionOne.jsx';
import QuestionTwo from '../QuestionTwo/QuestionTwo.jsx';
import QuestionThree from '../QuestionThree/QuestionThree.jsx';
import QuestionFour from '../QuestionFour/QuestionFour.jsx';
import Review from '../Review/Review.jsx';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess.jsx';
import Admin from '../Admin/Admin.jsx';

function App() {


  // these routes allow the user to navigate from page to page without a nav bar
  // The exception is the admin route which requires users to manually navigate to
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route exact path="/question-1">
          <QuestionOne />
        </Route>
        <Route exact path="/question-2">
          <QuestionTwo />
        </Route>
        <Route exact path="/question-3">
          <QuestionThree />
        </Route>
        <Route exact path="/question-4">
          <QuestionFour />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/submission-success">
          <SubmissionSuccess />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
