import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import LoginCard from "../../components/LoginCard";

class Login extends Component {

  state = {};

  render() {
    return (
      <Wrapper>
          <div className='row h-100 align-items-center'>
            <LoginCard/>
          </div>
      </Wrapper>
    );
  }
}

export default Login;
