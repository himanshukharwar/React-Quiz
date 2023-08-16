function StartScreen({numQuestions, dispatch}) {
    return (
        <div className="start">
            <h2>Welcome To The React Quiz</h2>
            <h3>{numQuestions} questions to test your React command</h3>
            <button className="btn btn-ui" onClick={() => dispatch({type: 'start'})}>Start Test</button>
        </div>
    )
}

export default StartScreen
