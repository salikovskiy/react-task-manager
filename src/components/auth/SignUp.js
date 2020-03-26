import React, { Component } from "react";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="auth-container">
        <form onSubmit={this.handleSubmit} className="white">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
            {/* <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
