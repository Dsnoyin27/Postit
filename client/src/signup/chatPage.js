import React from "react";
import "./chatPage.css";

class chatPage extends React.Component {
  render() {
    return (
      <div>


        <body>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Group A

              </a>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {/*<!-- Dropdown Trigger -->*/}
                <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Other Options</a>
                {/*<!-- Dropdown Structure -->*/}
                <ul id="dropdown1" className="dropdown-content">
                  <li>
                    <a href="#!">one</a>
                  </li>
                  <li>
                    <a href="#!">two</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#!">three</a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="material-icons">view_module</i>four
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="material-icons">cloud</i>five
                    </a>
                  </li>
                </ul>
              </ul>
              <div id="nav-mobile" className="right hide-on-med-and-down">

                </div>
            </div>
          </nav>

          <div className="chatbox">
            <div className="chatlog">
              <div className="chat friend">
                <div className="user-photo" />
                <p className="chat-message">Hello
                </p>
              </div>

              <div className="chat self">
                <div className="user-photo" />
                <p className="chat-message">
                   Hi!
                   </p>
              </div>

              <div className="chat friend">
                <div className="user-photo" />
                <p className="chat-message">
                   Hello!
                   </p>
              </div>

              <div className="chat self">
                <div className="user-photo" />
                <p className="chat-message">
                   Hi!
                   </p>
              </div>

              <div className="chat friend">
                <div className="user-photo" />
                <p className="chat-message"> Hello!</p>
              </div>

              <div className="chat self">
                <div className="user-photo" />
                <p className="chat-message">Hi! </p>
              </div>

              <div className="chat-form">
                <textarea className="text-area" />
                <button>Send</button>
              </div>
            </div>
          </div>

          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-2.1.1.min.js"
          />
          <script type="text/javascript" src="js/materialize.min.js" />

          {/*<!-- Compiled and minified JavaScript -->*/}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js" />
        </body>
      </div>
    );
  }
}
export default chatPage;
