import { useNavigate, useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";

import { ButtonGroup, Container, Content, Info } from "./Country.styles";
import { Button, Image } from "../../components/common";
import { IoMdArrowBack } from "react-icons/io";

import { Country as ICountry } from "../../types";

export interface CountryProps {
  countries?: ICountry[];
  isLoading: boolean;
  isError: boolean;
}

const fetchCountry = async (code: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code?.toLowerCase()}`
    );
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.error(error);
  }
};

const Country = ({ countries, isLoading, isError }: CountryProps) => {
  const navigate = useNavigate();
  const { countryCode } = useParams();

  const country = countries?.find(
    (country) => country.cca3 === countryCode || country.cca2 === countryCode
  );

  if (isLoading) return <>loading</>;

  return (
    <Container>
      <Button
        variant="contained"
        leftIcon={<IoMdArrowBack />}
        onClick={() => navigate("/")}
      >
        Voltar
      </Button>

      <Content>
        <Image src={country?.flags.svg} />

        <Info>
          <section className="title">
            <h1>{country?.name.common}</h1>
          </section>

          <section className="section-1">
            <div>
              <strong>Native Name(s):</strong>
              <span>
                {Object.values(country?.name.nativeName || {})
                  .map(({ official }) => official)
                  .join(", ")}
              </span>
            </div>

            <div>
              <strong>Population:</strong>
              <span>
                {new Intl.NumberFormat().format(country?.population as number)}
              </span>
            </div>

            <div>
              <strong>Region:</strong>
              <span>{country?.region}</span>
            </div>

            <div>
              <strong>Sub Region:</strong>
              <span>{country?.subregion}</span>
            </div>

            <div>
              <strong>Capital:</strong>
              <span>{country?.capital?.join(", ")}</span>
            </div>
          </section>

          <section className="section-2">
            <div>
              <strong>Top Level Domain:</strong>
              <span>{country?.tld?.join(", ")}</span>
            </div>

            <div>
              <strong>Currencies:</strong>
              <span>
                {Object.values(country?.currencies || {})
                  .map(({ name, symbol }) => `${name} (${symbol})`)
                  .join(", ")}
              </span>
            </div>

            <div>
              <strong>Languages:</strong>
              <span>
                {Object.values(country?.languages || {})
                  .map((lang) => lang)
                  .join(", ")}
              </span>
            </div>
          </section>

          <section className="section-3">
            <strong>Border Countries:</strong>
            <ButtonGroup>
              {country?.borders?.map((borderCountry) => (
                <Link key={borderCountry} to={`/country/${borderCountry}`}>
                  <Button variant="contained">{borderCountry}</Button>
                </Link>
              ))}
            </ButtonGroup>
          </section>
        </Info>
      </Content>
    </Container>
  );
};

export default Country;
