import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputField, Button } from "../../components";
import * as S from "./Login.style";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  const [notification, setNotification] = useState();

  return (
    <S.Main>
      <S.Container></S.Container>
      <S.Container>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            if (user.email.length > 3 && user.password.length > 6) {
              history.push("/chats");
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
          <Button color="secondary" type="submit">
            Login
          </Button>
        </S.Form>
      </S.Container>
    </S.Main>
  );
}

export default Login;
