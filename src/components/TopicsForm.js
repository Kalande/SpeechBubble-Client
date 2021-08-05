import SelectInput from "./SelectInput"

function Topics (props){

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <SelectInput
                    label=
                    id=
                    value={props.value}
                    name={props.name}
                    required={props.required}
                />

            </form>
        </div>
    )
}