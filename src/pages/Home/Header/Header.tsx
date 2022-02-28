import { BaseInput, Select } from "../../../components/common";
import { HeaderRoot, SearchBar, SelectWrapper } from "./Header.styles";

import { MdSearch } from "react-icons/md";

export interface HeaderProps {
  filter: string;
  setFilter: (value: string) => void;
  region: string;
  setRegion: (value: string) => void;
}

const Header = ({ filter, setFilter, region, setRegion }: HeaderProps) => {
  return (
    <HeaderRoot>
      <SearchBar>
        <MdSearch fontSize={25} />
        <BaseInput
          fullWidth
          placeholder="Search for a country..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </SearchBar>

      <SelectWrapper>
        <Select
          placeholder="Filter by Region"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        >
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </SelectWrapper>
    </HeaderRoot>
  );
};

export default Header;
