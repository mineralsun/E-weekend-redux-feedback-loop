import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SubmissionSuccess() {
    const history = useHistory();
    const dispatch = useDispatch();

    const returnToStart = (event) => {
        dispatch({type: 'CLEAR_FORM'});
        history.push('/');
    }

    return (
        <>
            <h2>Congratulations on a Successful Submission!</h2>
            <button onClick={returnToStart}>Restart Survey</button>
        </>
    );
}

export default SubmissionSuccess;