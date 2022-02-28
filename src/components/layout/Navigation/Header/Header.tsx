import { useDarkMode } from "../../../../hooks";
import { Button } from "../../../common";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

import { Container, Content } from "./Header.styles";

export interface HeaderProps {}

const Header = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <Container>
      <Content>
        <h1>Where in the world?</h1>

        <Button
          onClick={toggle}
          leftIcon={isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        >
          Dark mode
        </Button>
      </Content>
    </Container>
  );
};

export default Header;
