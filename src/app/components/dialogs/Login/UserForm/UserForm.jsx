import React, { Component } from 'react';
import './UserForm.css';

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      gender: "male",
      preference: "girls",
      errors: {
        username: undefined,
        gender: undefined,
        preference: undefined
      }
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  }

  updateUserName = (event) => {
    let valid_username_regex = /^[A-Za-z0-9_-]+$/;
    let username = event.target.value.trim();
    if (!valid_username_regex.test(username)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          username: "can only contain alphanumeric _ and -"
        }
      })
    } else {
      this.setState({
        ...this.state,
        username,
        errors: {
          ...this.state.errors,
          username: undefined
        }
      });
    }
  }

  updateGender = (event) => {
    this.setState({
      ...this.state,
      gender: event.target.value
    });
  }

  updatePreferences = (event) => {
    this.setState({
      ...this.state,
      preference: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="nes-field">
          <label htmlFor="username_field" style={{fontSize: "1rem"}}>Username</label>
          <input type="text" id="username_field" className={`nes-input ${this.state.errors.username ? "is-error" : ""}`} style={{backgroundColor: 'whitesmoke'}} onBlur={this.updateUserName}/>
          { this.state.errors.username ? <p className="nes-text is-error">{this.state.errors.username}</p> : false }
        </div>
        <div className="orientation-details">
          <div className="nes-field nes-container with-title radio-input">
            <p className="title" style={{backgroundColor: 'whitesmoke'}}>Gender</p>
            <label>
              <input type="radio" className="nes-radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.updateGender} />
              <span>Male</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.updateGender} />
              <span>Female</span>
            </label>
          </div>
          <div className="nes-field nes-container with-title radio-input">
            <p className="title" style={{backgroundColor: 'whitesmoke'}}>Preference</p>
            <label>
              <input type="radio" className="nes-radio" name="preference" value="guys" checked={this.state.preference === "guys"} onChange={this.updatePreferences} />
              <span>Guys</span>
            </label>
            <label>
              <input type="radio" className="nes-radio" name="preference" value="girls" checked={this.state.preference === "girls"} onChange={this.updatePreferences} />
              <span>Girls</span>
            </label>
          </div>
        </div>
        <button type="submit" className="nes-btn is-primary">Let's go!</button>
      </form>
    );
  }
}