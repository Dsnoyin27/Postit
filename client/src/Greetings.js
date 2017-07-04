import React, { Component } from "react";

class Greetings extends Component {
  render() {
    return (
      <div>
        <div className="slider">
          <ul className="slides">
            <li className="active">
              <img src="https://c.slashgear.com/wp-content/uploads/2016/12/snapchat2323.jpg" />
              {/*<!-- First Image -->*/}
              <div className="caption center-align black">
                <h3>Create an Account!</h3>
                <h6 className="light grey-text text-lighten-3">
                  Join our Community.
                </h6>
              </div>
            </li>
            <li>
              <img src="http://184ynl3xrypi2ruscv1a607s.wpengine.netdna-cdn.com/wp-content/uploads/2016/03/group-chat-768x469.jpg" />
              {/*<!-- Secong Image -->*/}
              <div className="caption left-align black">
                <h3>Login</h3>
                <h6 className="light grey-text text-lighten-3">Get Started</h6>
              </div>
            </li>
            <li>
              <img src="http://blog.dingtone.me/en/wp-content/uploads/2016/06/Three-best-group-chat-apps-to-Send-Group-Text-Messages-free.jpg" />
              {/*<!-- Third Image -->*/}
              <div className="caption right-align black">
                <h3>Create Groups</h3>
                <h6 className="light grey-text text-lighten-3">
                  Chat with other Users
                </h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Greetings;
