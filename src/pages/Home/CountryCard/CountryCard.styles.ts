import styled from "styled-components";
import { Card as AppCard } from "../../../components/common";

export const Card = styled(AppCard)(({ theme }) => ({
  cursor: "pointer",
  transition: "box-shadow 150ms ease-out",

  "&:hover": {
    boxShadow: theme.shadows.md,
    transition: "box-shadow 150ms ease-in",
  },
}));

export const CardBody = styled.div({
  paddingTop: 14,
  textDecoration: "none",
});

export const CardTitle = styled.h2({
  fontSize: 22,
  fontWeight: 600,
});

export const CardContent = styled.div({
  paddingTop: 10,

  div: {
    strong: {
      fontWeight: 600,
    },
    span: {
      marginLeft: 10,
    },
  },
});
