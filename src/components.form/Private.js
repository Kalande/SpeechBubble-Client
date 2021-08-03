import TextInput from "./props.form/TextInput";

function Private(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div style={{ fontSize: 16 }}>
        <strong>
          <TextInput
            label="What should we call you?"
            type="text"
            name="name"
            id="name"
            value={props.state.name}
            onChange={props.handleChange}
          />
          <TextInput
            label="Secret Question"
            type="text"
            name="question"
            id="question"
            value={props.state.question}
            onChange={props.handleChange}
          />
          <TextInput
            label="Secret Answer"
            type="text"
            name="answer"
            id="answer"
            value={props.state.answer}
            onChange={props.handleChange}
          />
        </strong>
      </div>
      {props.error ? (
        <div className="alert alert-danger">{props.error}</div>
      ) : null}

      <div className="form-group">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#FF7600" }}
          type="submit"
        >
          Enter Private Room
        </button>
      </div>
    </form>
  );
}
export default Private;
