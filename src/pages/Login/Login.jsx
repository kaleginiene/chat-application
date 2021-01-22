import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { Button, InputField } from "../../components";
import * as S from "./Login.style";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  const userInfo = useContext(UserContext);
  const [notification, setNotification] = useState();
  const [formDisplay, setFormDisplay] = useState("");

  return (
    <S.Main>
      <S.Container></S.Container>
      <S.Container>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            if (user.email.length > 3 && user.password.length > 6) {
              e.target.style.display = "none"; //on submit form disapears
              setFormDisplay("show");
            } else {
              setNotification(
                "Yur credetials does not follow the rules. Email must be more than 3 characters and password can not be less than 6 characters."
              );
            }
          }}
        >
          <S.Title>Login</S.Title>
          {notification && <S.Notification>{notification}</S.Notification>}
          <InputField
            type="email"
            placeholder="e.g.: email@email"
            label="Email"
            handleChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <InputField
            type="password"
            placeholder="Enter your password"
            label="Password"
            handleChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <Button color="primary" type="submit">
            Login
          </Button>
        </S.Form>
        {formDisplay === "show" && (
          <S.Form
            onSubmit={(e) => {
              e.preventDefault();
              history.push("/chats");
            }}
          >
            <S.SubTitle>Personal information</S.SubTitle>
            <InputField
              type="text"
              placeholder="First name"
              label="Name"
              required
              handleChange={(e) =>
                userInfo.setState({ ...userInfo.state, name: e.target.value })
              }
            />
            <InputField
              type="text"
              placeholder="Last name"
              label="Surname"
              required
              handleChange={(e) =>
                userInfo.setState({
                  ...userInfo.state,
                  surname: e.target.value,
                })
              }
            />
            <InputField
              type="radio"
              radioId="male"
              label="Male"
              radioName="gender"
              handleChange={(e) =>
                userInfo.setState({ ...userInfo.state, gender: e.target.id })
              }
            />
            <InputField
              type="radio"
              radioId="female"
              label="Female"
              radioName="gender"
              handleChange={(e) =>
                userInfo.setState({ ...userInfo.state, gender: e.target.id })
              }
            />
            <InputField
              type="radio"
              radioId="other"
              label="Other"
              radioName="gender"
              handleChange={(e) =>
                userInfo.setState({ ...userInfo.state, gender: e.target.id })
              }
            />
            <InputField
              type="text"
              placeholder="City"
              label="City"
              required
              handleChange={(e) =>
                userInfo.setState({
                  ...userInfo.state,
                  city: e.target.value,
                })
              }
            />
            <Button color="primary" type="submit">
              Submit
            </Button>
          </S.Form>
        )}
      </S.Container>
    </S.Main>
  );
}

export default Login;
