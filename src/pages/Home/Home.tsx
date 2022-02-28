import { useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "./Header";
import { CountryCard } from "./CountryCard";
import { Container } from "./Home.styles";

import { Country } from "../../types";

export interface HomeProps {
  countries?: Country[];
  isLoading: boolean;
  isError: boolean;
}

const Home = ({ countries, isError, isLoading }: HomeProps) => {
  const [filter, setFilter] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <Header
        filter={filter}
        setFilter={setFilter}
        region={region}
        setRegion={setRegion}
      />
      <Container>
        {countries
          ?.filter(
            (country) =>
              country.name.common
                .toLowerCase()
                .includes(filter.toLowerCase()) &&
              country.region.toLowerCase().includes(region.toLowerCase())
          )
          .map((country) => (
            <Link key={country.cca2} to={`/country/${country.cca3}`}>
              <CountryCard country={country} />
            </Link>
          ))}
      </Container>
    </>
  );
};

export default Home;
