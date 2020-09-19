import React from "react";
import {
  Container,
  Form,
  Inputs,
  Input,
  Label,
  Buttons,
  LoginAndSignup,
} from "./session_styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../../actions/session_actions";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [age, setAge] = useState(0);

  const dispatch = useDispatch();

  const update = (field) => {
    switch (field) {
      case "email":
        return (e) => setEmail(e.currentTarget.value);
      case "password":
        return (e) => setPassword(e.currentTarget.value);
      case "firstName":
        return (e) => setFirstName(e.currentTarget.value);
      case "lastName":
        return (e) => setLastName(e.currentTarget.value);
      case "city":
        return (e) => setCity(e.currentTarget.value);
      case "state":
        return (e) => setState(e.currentTarget.value);
      case "age":
        return (e) => setAge(e.currentTarget.value);
      default:
        return null;
    }
  };

  const setDemoUser = (e) => {
    e.preventDefault();
    const currentUser = {
      email: "james@demo.com",
      password: "password",
    };
    dispatch(login(currentUser));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = {
      email: email,
      password: password,
    };
    dispatch(signup(currentUser));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Inputs>
          <Input
            type="text"
            placeholder="First Name"
            onChange={update("firstName")}
          />
          <Input
            type="text"
            placeholder="Last Name"
            onChange={update("lastName")}
          />
          <Input type="text" placeholder="City" onChange={update("city")} />
          <Input type="text" placeholder="State" onChange={update("state")} />

          <Input type="number" placeholder="Age" onChange={update("age")} />

          <Input
            type="password"
            placeholder="Password"
            onChange={update("password")}
          />
        </Inputs>
        <Buttons>
          <LoginAndSignup>Sign Up</LoginAndSignup>
          <LoginAndSignup onClick={setDemoUser}>Demo User</LoginAndSignup>
        </Buttons>
      </Form>
    </Container>
  );
}
