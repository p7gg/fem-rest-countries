import { forwardRef } from "react";
import { SelectRoot, SelectField } from "./Select.styles";
import { SelectIcon } from "./SelectIcon";

type RootProps = React.ComponentPropsWithoutRef<"div">;

export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  rootProps?: RootProps;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, rootProps, placeholder, ...rest }: SelectProps, ref) => {
    return (
      <SelectRoot {...rootProps}>
        <SelectField ref={ref} {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {children}
        </SelectField>

        <SelectIcon />
      </SelectRoot>
    );
  }
);

export default Select;
