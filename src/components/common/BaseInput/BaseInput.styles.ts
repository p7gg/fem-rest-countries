import styled from "styled-components";

export interface UnstyledInputProps {
  fullWidth?: boolean;
}

export const UnstyledInput = styled.input<UnstyledInputProps>(
  ({ fullWidth }) => ({
    borderWidth: 0,
    color: "inherit",
    backgroundColor: "transparent",
    minHeight: 28,
    outline: 0,
    ...(fullWidth && { width: "100%" }),

    "&:focus, &:focus-within": {
      outline: "none",
      borderColor: "transparent",
    },

    "&:disabled": {
      backgroundColor: "transparent",

      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: "transparent",
      },
    },

    "&::placeholder": {
      color: "inherit",
    },
  })
);
