import styled from "@emotion/styled";
import { Color } from "../../../styles/Colors";

const Input = styled.input`
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
`;

export default function Input01(props) {
  return (
    <Input
      placeholder={props.placeholder}
      onChange={props.onChange}
      id={props.id}
      type={props.type}
    />
  );
}
