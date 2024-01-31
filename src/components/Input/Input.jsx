import "./Input.css";
import PropTypes from "prop-types";

export default function Input(props) {
    return (
        <div className="container-form">
            <label htmlFor="">
                {props.label}: {props.inputValue}
            </label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            />
        </div>
    );
}

Input.PropTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    inputValue: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
};
