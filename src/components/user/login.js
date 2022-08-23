import styled from "@emotion/styled";
import { useState, useContext, useEffect } from "react";
import Input01 from "../commons/inputs/Input01";
import Button01 from "../commons/buttons/Button01";
import { UserValidation } from "./UserValidation";
import axios from "axios";
import { join, login } from "../../utils/ApiRoutes";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [NewInputs, setNewInputs] = useState({ email: "", password: "" });

  const onChangeInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeNewInput = (event) => {
    setNewInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickJoin = async () => {
    await axios
      .post(`${join}`, {
        email: NewInputs.email,
        password: NewInputs.password,
      })
      .then((res) => {
        alert("회원가입에 성공했습니다");
        navigate("/");
      });
  };

  const onClickLogin = async () => {
    console.log(inputs);
    // localStorage.setItem("aaa", "철수"); // 저장
    // console.log(localStorage.getItem("aaa")); // 사용
    await axios
      .post(`${login}`, {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res);
        const accessToken = res.data.access_token;
        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
        }

        console.log("======================");
        console.log(localStorage.getItem("accessToken"));
        console.log("======================");

        //로그인 성공페이지로 이동하기
        alert("로그인에 성공했습니다");
        // navigate("/todo");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      console.log(localStorage.getItem("accessToken"));
      navigate("/todo");
    }
  }, []);

  return (
    <Main>
      <section className="login">
        <h1>기존회원 로그인</h1>
        <Form>
          <Input01
            placeholder="@를 포함한 email"
            id="email"
            onChange={onChangeInput}
          />
          <Input01
            placeholder="8자 이상의 password"
            id="password"
            onChange={onChangeInput}
          />
          <Button01
            onClick={onClickLogin}
            name="로그인"
            disabled={UserValidation(inputs.email, inputs.password)}
          />
        </Form>
      </section>
      <section className="login">
        <h1>신규회원 가입</h1>
        <Form>
          <Input01
            placeholder="@를 포함한 email"
            id="email"
            onChange={onChangeInput}
          />
          <Input01
            placeholder="8자 이상의 password"
            id="password"
            onChange={onChangeNewInput}
          />
          <Button01
            onClick={onClickJoin}
            name="회원가입"
            disabled={UserValidation(NewInputs.email, NewInputs.password)}
          />
        </Form>
      </section>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  section {
    width: 400px;
    padding: 80px 0px;
    h1 {
      margin-bottom: 30px;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 15px;
  }
`;
