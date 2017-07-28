import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { createGroup } from '../../action-creators/groupActions';
import { addFlashMessage } from '../../action-creators/flashActions';

function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.groupname)) {
    errors.groupname = true;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

class CreateGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupname: '',
      errors: {},
      success: false,
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createGroup(this.state).then(
        res => {
          this.setState({
            success: true,
            isLoading: false
          });
        },
        err => {
          this.props.addFlashMessage({
            type: 'error',
            text: err.response.data.message || 'Could not create group',
            explanation: 'You could try to add the group at a later time.'
          });
          this.setState({
            isLoading: false
          });
        }
      );
    }
  }

  render() {
    const { success, groupname, errors, isLoading } = this.state;

    if (success) {
      return <Redirect to="/groups" />;
    }

    return (
      <Form onSubmit={this.onSubmit} loading={isLoading}>
        <Form.Field>
          <Form.Input
            label="Group Name"
            placeholder="Enter a group name"
            value={groupname}
            onChange={this.onChange}
            name="groupname"
            error={errors && errors.groupname}
          />
          <Button type="submit">Create Group</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default connect(null, { createGroup, addFlashMessage })(CreateGroup);
