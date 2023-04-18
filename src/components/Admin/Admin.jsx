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

    const returnHome = (event) => {
        history.push('/');
    }

    return(
        <>
            <h3>ADMIN PAGE: SEE RESULTS OF ALL SURVEYS</h3>
            <button onClick={returnHome}>Home</button>
            <hr />
            {
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