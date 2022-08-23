import styled from "@emotion/styled";
import Input01 from "../commons/inputs/Input01";
import Button02 from "../commons/buttons/Button02";
import { Color } from "../../styles/Colors";
import { useState } from "react";
import Button01 from "../commons/buttons/Button01";

export default function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(true);
  };

  return (
    <Form>
      {isEdit && (
        <>
          <Input01 id="todo" />
          <Button01 name="수정" />
        </>
      )}
      {!isEdit && (
        <>
          <span>{String(props.el.isCompleted)}</span>
          <div>{props.el.todo}</div>
          <Button02 name="수정" onClick={toggleEdit} />
          <Button02 name="삭제" />
        </>
      )}
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  div {
    margin-right: 20px;
    width: 100%;
    /* border-radius: 8px; */
    padding: 10px 15px;
    border-bottom: 2px solid ${Color.GREEN_MAIN};
    ::placeholder {
      color: ${Color.GRAY_1};
    }
    :focus {
      outline: none;
    }
  }
  button {
    width: 60px;
  }
  button:last-of-type {
    margin-left: 8px;
  }
`;
