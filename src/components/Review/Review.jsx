import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();

    const wellness = useSelector(store => store.wellness);
    const goofyness = useSelector(store => store.goofyness);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const sendToDatabase = (event) => {
        axios.post('/feedback', {
            wellness,
            goofyness,
            support,
            comments,
        }).then((repsonse) => {
            // really wanted to add the 'CLEAR_FORM' here but in the instructions it said to do that upon
            // restart of survey, so it is on the successful submission component!
            history.push('/submission-success');
        }).catch((error) => {
            alert(`Error in POST ${error}, please try again!`)
        });
    }



    return (
        <>
            <h3>Review Your Submission!</h3>
            <hr />
            <div>Wellness: {wellness} </div>
            <div>Goofyness: {goofyness} </div>
            <div>Support: {support} </div>
            <div>Comments: {comments} </div>
            <hr />
            <button onClick={sendToDatabase}>Submit</button>
        </>
    );
}

export default Review;