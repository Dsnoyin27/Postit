import React from "react";
import classnames from "classnames";

const TextFieldGroup = ({ field, value, label, errors, type, onChange }) => {
  return (
    <div className={classnames("form-group", { "has-error": errors })}>
      <label className="control-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={field}
        className="form-control"
      />
      {errors &&
        <span className="help-block">
          {errors}
        </span>}
    </div>
  );
};
TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};
TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
