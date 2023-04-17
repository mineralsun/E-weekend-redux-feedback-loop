import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function QuestionThree() {
    const history = useHistory();
    const dispatch = useDispatch();

    const support = useSelector(store => store.support);

    const handleChange = (event) => {
        const action = {type: 'SET_SUPPORT_SCORE', payload: event.target.value};
        dispatch(action);
    }

    const nextPage = () => {
        if (support > 0) {
            history.push('/question-4');
        } else {
            alert('Please rate how supported you feel from 1 to 5!')
        }
    }

    return (
        <>
            <h3>How supported do you feel?</h3>
            <p>Please input a value from 1 to 5 on how supported you feel?</p>
            <form onSubmit={nextPage}>
                <label htmlFor="support">Support</label>
                <input id="support" value={support} onChange={handleChange} type="number" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default QuestionThree;