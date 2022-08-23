import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input01 from "../commons/inputs/Input01";
import Button01 from "../commons/buttons/Button01";
import TodoItem from "./TodoItem";
import { todos } from "../../utils/ApiRoutes";
import axios from "axios";

export default function TodoPage() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const access_token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      console.log(localStorage.getItem("accessToken"));
      navigate("/");
    }
  }, []);

  const getTodos = async () => {
    await axios
      .get(`${todos}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onClickAdd = async () => {
    await axios
      .post(
        `${todos}`,
        { todo: input },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  };

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <Main>
      <section className="todo">
        <h1>투두 리스트</h1>
        <Form>
          <Input01
            placeholder="할 일을 추가하세요"
            id="todo"
            type="text"
            onChange={onChangeInput}
          />
          <Button01 name="추가" onClick={onClickAdd} />
        </Form>
      </section>
      <section className="todo-list">
        {data &&
          data.map((el) => (
            <List key={el.id}>
              <TodoItem el={el} />
            </List>
          ))}
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
  section {
    width: 400px;
    h1 {
      margin-bottom: 30px;
    }
  }
  section.todo {
    padding: 80px 0px;
  }
`;

const Form = styled.div`
  display: flex;
  /* flex-direction: column; */
  input {
    margin-right: 20px;
  }
  button {
    width: 60px;
  }
`;

const List = styled.div`
  width: 100%;
`;
