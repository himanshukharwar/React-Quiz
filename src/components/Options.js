function Options({question}) {
    return (
        <div>
            <div>
        {question.options.map((option) => (
          <button className="btn btn-option options" key={option}>{option}</button>
        ))}
      </div>
        </div>
    )
}

export default Options
