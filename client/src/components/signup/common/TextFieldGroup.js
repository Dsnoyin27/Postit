import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({field, value, label, error, onChange }) => {
  return (
    <div
          className={classnames("form-group", { "has-error": errors.username })}
        >
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
          {errors.username &&
            <span className="help-block">{errors.username}</span>}
        </div>
  );
}
  TextFieldGroup.propTypes ={
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  }
  TextFieldGroup.defaultProps = {
    type:"text"
  }


export default;
