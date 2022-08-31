import styled from "@emotion/styled";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <LayoutWrap>
      <Outlet />
    </LayoutWrap>
  );
}

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
