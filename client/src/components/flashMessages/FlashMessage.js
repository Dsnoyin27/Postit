import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

// Renders and deletes flashmessages
class FlashMessage extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text, explanation, icon } = this.props.message;

    return (
      <Message
        negative={type === 'error'}
        success={type === 'success'}
        onDismiss={this.onClick}
        header={text}
        content={explanation && explanation}
        icon={icon && icon}
      />
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
