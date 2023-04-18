import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Admin({ entry }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const feedbackList = useSelector(store => store.feedbackList);

    useEffect(() => {
        fetchFeedbackList();
    }, []);

    // This GET request works by getting the data from the database, then setting
    // the response it gets as dispatched data stored temporarily in redux
    // That data then gets mapped onto the dom from its store
    const fetchFeedbackList = () => {
        axios.get('/feedback').then((response) => {
            dispatch({ type: 'SET_FEEDBACK_LIST', payload: response.data});
        }).catch((error) => {
            console.log(`Error in GET: ${error}`);
            alert(`Something went wrong!`)
        });
    }

    const deleteEntry = (e) => {
        console.log(`deleteEntry ${feedbackList.id}`)
        axios.delete(`/feedback/${feedbackList.id}`)
        .then((response) => {
            fetchFeedbackList();
        }).catch((error) => {
            console.log(`Error in deleteEntry ${error}`);
            alert('Something went wrong!')
        });
    }

    // This was just a little button I made so the user wouldn't have to navigate home
    // manually!
    const returnHome = (event) => {
        history.push('/');
    }

    return(
        <>
            <h3>ADMIN PAGE: SEE RESULTS OF ALL SURVEYS</h3>
            <button onClick={returnHome}>Home</button>
            <hr />
            {
                // This maps through all the data in order and posts it on the DOM!
                feedbackList.map(entry => (
                    <div key={entry.id}>
                        <p>Wellness: {entry.wellness}</p>
                        <p>Goofyness: {entry.goofyness}</p>
                        <p>Support: {entry.suppport}</p>
                        <p>Comments: {entry.comments}</p>
                        <button onClick={deleteEntry}>Delete Entry</button>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default Admin;