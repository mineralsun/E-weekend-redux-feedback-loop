import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function QuestionTwo() {
    const history = useHistory();
    const dispatch = useDispatch();

    const goofyness = useSelector(store => store.goofyness);

    const handleChange = (event) => {
        const action = {type: 'SET_GOOFYNESS_SCORE', payload: event.target.value};
        dispatch(action);
    }

    const nextPage = () => {
        // DO I NEED PREVENT DEFAULT?
        if (goofyness > 0 ) {
            history.push('/question-3');
        } else {
            alert('Please rate your goofyness from 1-5!');
        }
    }

    return (
        <>
            <h3>How goofy do you feel today?</h3>
            <p>Please input a value where 1 is not goofy at all, and 5 is the most goofy!</p>
            <form onSubmit={nextPage}>
                <label htmlFor="goofyness">Goofyness</label>
                <input id="goofyness" value={goofyness} onChange={handleChange} type="number" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default QuestionTwo;