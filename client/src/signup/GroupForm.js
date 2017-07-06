import React from "react";
import classnames from "classnames";

class GroupForm extends React.Component {
  state = {
    groupname: "",
    username: "",
    errors: {}
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //Validations
    let errors = {};
    if (this.state.groupname === "") errors.groupname = "Can't be empty";
    if (this.state.username === "") errors.username = "Can't be empty";
    this.setState({ errors });
  };
  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Create Group</h1>
          <div
            className={classnames("field", {
              error: this.state.errors.groupname
            })}
          >
            <label htmlFor="title">Group Name</label>
            <input
              name="groupname"
              value={this.state.groupname}
              onChange={this.handleChange}
              id="groupname"
            />
            <span>
              {this.state.errors.groupname}
            </span>
          </div>

          <div
            className={classnames("field", {
              error: this.state.errors.username
            })}
          >
            <label htmlFor="title">Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
            />
            <span>
              {this.state.errors.groupname}
            </span>
            </div>

            <div><button className="button">Save</button></div>


        </form>
      </div>
    );
  }
}
export default GroupForm;
