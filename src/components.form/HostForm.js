import TextInput from "./props.form/TextInput";
import SelectInput from "./props.form/SelectInput";

function HostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div style={{ fontSize: 16 }}>
        <strong>
          <TextInput
            label="Room Name"
            type="text"
            name="room"
            id="room"
            value={props.state.room}
            onChange={props.handleChange}
          />

          <TextInput
            label="Subject"
            type="text"
            name="subject"
            id="subject"
            value={props.state.subject}
            onChange={props.handleChange}
          />

          <SelectInput
            label="Users Limit"
            type="text"
            name="limit"
            id="limit"
            value={props.state.limit}
            onChange={props.handleChange}
            items={["5", "10", "20"]}
          />

          <SelectInput
            label="Public or Private?"
            type="text"
            name="publicOrPrivate"
            id="publicOrPrivate"
            value={props.state.publicOrPrivate}
            onChange={props.handleChange}
            items={["Public", "Private"]}
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
          Create
        </button>
      </div>
    </form>
  );
}
export default HostForm;
