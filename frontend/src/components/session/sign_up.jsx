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
      first_name: firstName,
      last_name: lastName,
      city,
      state,
      age,
    };
    console.log(currentUser);
    dispatch(signup(currentUser));
  };
  const errors = useSelector((state) => state.errors.session);
  console.log(errors)
  const renderErrors = () => {
    return (
      <ul className="errors-list">
        {Object.values(errors).map((error) => (
          <li className="errors">{error}</li>
        ))}
      </ul>
    );
  };
  return (
    <div className="session-container">
      <div className="session-outline">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="text"
              placeholder="First Name"
              onChange={update("firstName")}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={update("lastName")}
            />
            <input type="text" placeholder="Email" onChange={update("email")} />
            <input type="text" placeholder="City" onChange={update("city")} />
            <input type="text" placeholder="State" onChange={update("state")} />

            <input type="number" placeholder="Age" onChange={update("age")} />

            <input
              type="password"
              placeholder="Password"
              onChange={update("password")}
            />
          </div>
          <div className="session-btns">
            <button>Sign Up</button>
            <button onClick={setDemoUser}>Demo User</button>
          </div>
          {renderErrors()}
        </form>
      </div>
    </div>
  );
}
