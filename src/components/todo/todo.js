import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import { todos } from "../../utils/ApiRoutes";
import axios from "axios";
import TodoWrite from "./TodoWrite";
import * as S from "./Todo.styles";

export default function TodoPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const access_token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      console.log(localStorage.getItem("accessToken"));
      return navigate("/");
    }
    if (localStorage.getItem("accessToken")) {
      getTodos();
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
        setData(res.data);
      });
  };

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
        setData(res.data);
        getTodos();
        setInput("");
      });
  };

  return (
    <S.Main>
      <section className="todo">
        <h1>투두 리스트</h1>

        <TodoWrite
          placeholder="할 일을 추가하세요"
          type="text"
          onChange={(event) => setInput(event.target.value)}
          value={input}
          onClickAdd={onClickAdd}
          isEdit={false}
        />
      </section>
      <section className="todo_list">
        <S.CheckInfo>
          <div className="info">
            <div></div>
            <span>Done</span>
          </div>
          <div className="info">
            <div className="doing"></div>
            <span>Doing</span>
          </div>
        </S.CheckInfo>
        {data.length > 0 &&
          data.map((el) => (
            <div key={el.id}>
              <TodoItem el={el} getTodos={getTodos} />
            </div>
          ))}
      </section>
    </S.Main>
  );
}
