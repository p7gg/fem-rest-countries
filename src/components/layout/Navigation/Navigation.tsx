import { Outlet } from "react-router-dom";

import { Header } from "./Header";

import { Container, Content } from "./Navigation.styles";

export interface NavigationProps {}

const Navigation = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};

export default Navigation;
