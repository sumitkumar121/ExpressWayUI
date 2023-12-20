import React from "react";
import "./App.css";

const App = () => {
  return (
    <div id="login_frame">
      <form>
        <fieldset>
          <legend>Administrator login</legend>
          <div className="tt_form_row">
            <div className="tt_form_row_first">
              <label className="tt_form_row_start_label">Username</label>
            </div>
            <div className="tt_form_row_peer" id="usernamePeer">
              <span>&nbsp;</span>
            </div>
            <div className="tt_form_row_reqd" id="usernameRqd">
              &nbsp;
            </div>
            <div className="tt_form_row_long">
              <input
                type="text"
                name="username"
                size="35"
                maxLength="60"
                id="username"
                tabIndex="1"
              />
            </div>
          </div>
          <div className="tt_form_row">
            <div className="tt_form_row_first">
              <label className="tt_form_row_start_label">Password</label>
            </div>
            <div className="tt_form_row_peer" id="passwordPeer">
              <span>&nbsp;</span>
            </div>
            <div className="tt_form_row_reqd" id="passwordRqd">
              &nbsp;
            </div>
            <div className="tt_form_row_long">
              <input
                type="password"
                name="password"
                className="input_class"
                size="35"
                maxLength="1024"
                id="password"
                tabIndex="2"
                autoComplete="off"
              />
            </div>
          </div>
        </fieldset>
        <div className="tt_formbuttons">
          <div className="tt_formbuttons_left">
            <input
              type="submit"
              name="formbutton"
              className="input_class"
              id="save_button"
              tabIndex="3"
            />
          </div>
          <div className="tt_formbuttons_right"></div>
        </div>
        <div className="tt_formlinks">
          <a href="./" id="homebutton" className="openNewWindow">
            Home
          </a>
        </div>
      </form>
    </div>
  );
};
export default App;
