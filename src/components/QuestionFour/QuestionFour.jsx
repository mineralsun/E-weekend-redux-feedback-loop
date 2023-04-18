import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function QuestionFour() {
    const history = useHistory();
    const dispatch = useDispatch();

    const comments = useSelector(store => store.comments);

    const handleChange = (event) => {
        const action = {type: 'SET_COMMENTS', payload: event.target.value};
        dispatch(action);
    }

    const nextPage = () => {
        history.push('/review');
    }

    return (
        <>
            <h3>Please feel free to add any comments you may have!</h3>
            <p>These could range from overall reactions to the survey, or how your levels of goofyness and wellness are related to your feelings of support!</p>
            <form onSubmit={nextPage}>
                {/* The only out of ordinary thing I did here was look up how to use
                a text box instead of a normal input, so a user could see all of their comments
                for up to 10 rows! */}
                <textarea id="comments" placeholder="Comments go here!" cols="50" rows="10" value={comments} onChange={handleChange} type="text" />
                <br />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default QuestionFour;