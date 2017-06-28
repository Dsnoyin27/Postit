import React from "react";
import classnames from "classnames";
class FlashMessage extends React.Component{
  render() {
    const {id, type, text } = this.props.messages;
    return(
      <div className = {classnames('alert',{
         'alert-success': type === "success",
         'alert-danger': type === "error"
      })}>
      <button className="close"><span>&times;</span></button>
      {text}
      </div>
    );
  }
}
  FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired

}
