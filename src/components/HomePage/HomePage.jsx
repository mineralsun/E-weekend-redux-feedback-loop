import { useHistory } from 'react-router-dom';

function HomePage() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/question-1');
    }

    return (
        <>
            <h2>Welcome to the Survey!</h2>
            <p>It's time to figure out how well you feel,
                how goofy you are, and how supported you feel!
            </p>
            <button onClick={nextPage}>Begin Survey!</button>
        </>
    );
}

export default HomePage;