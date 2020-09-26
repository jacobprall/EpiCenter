import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/session_actions";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const update = (field) => {
    switch (field) {
      case "email":
        return (e) => setEmail(e.currentTarget.value);
      case "password":
        return (e) => setPassword(e.currentTarget.value);
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
    dispatch(login(currentUser));
  };

  const errors = useSelector((state) => state.errors.session);
  console.log(errors);
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
              placeholder="Email Address"
              onChange={update("email")}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={update("password")}
            />
          </div>
          <div className="session-btns">
            <button type="submit">Login</button>
            <button onClick={setDemoUser}>Demo User</button>
          </div>
        </form>
        {renderErrors()}
      </div>
    </div>
  );
};
export default Login;

// return (
//   <Container>
//     <Form onSubmit={handleSubmit}>
//       <Inputs>
//         <Input
//           type="text"
//           placeholder="Email Address"
//           onChange={update("email")}
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           onChange={update("password")}
//         />
//       </Inputs>
//       <Buttons>
//         <LoginAndSignup>Login</LoginAndSignup>
//         <LoginAndSignup onClick={setDemoUser}>Demo User</LoginAndSignup>
//       </Buttons>
//     </Form>
//   </Container>
// );
