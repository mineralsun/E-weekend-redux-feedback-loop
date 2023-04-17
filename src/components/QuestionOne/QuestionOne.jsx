import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function QuestionOne() {

    const history = useHistory();
    const dispatch = useDispatch();

    const wellness = useSelector(store => store.wellness);

    const handleChange = (event) => {
        const action = { type: 'SET_WELLNESS_SCORE', payload: event.target.value};
        dispatch(action);
    }

    const nextPage = () => {
        // DO I NEED PREVENT DEFAULT?
        if (wellness > 0) {
            history.push('/question-2');
        } else {
            alert('Please rate your wellness from 1-5, dude!');
        }
    }

    return (
        <>
            <h3>How well do you feel today?</h3>
            <p>Please input a value where 1 is not feeling well, and 5 is feeling exceptionally well!</p>
            <form onSubmit={nextPage}>
                <label htmlFor="wellness">Wellness:</label>
                <input id="wellness" value={wellness} onChange={handleChange} type="number" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default QuestionOne;