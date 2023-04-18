import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Admin() {
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


    return(
        <>
            <h3>ADMIN PAGE: SEE RESULTS OF ALL SURVEYS</h3><hr />
            {
                feedbackList.map(response => (
                    <div key={response.id}>
                        <p>Wellness: {response.wellness}</p>
                        <p>Goofyness: {response.goofyness}</p>
                        <p>Support: {response.suppport}</p>
                        <p>Comments: {response.comments}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default Admin;