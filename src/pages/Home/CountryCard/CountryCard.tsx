import { Image } from "../../../components/common";

import { Card, CardBody, CardTitle, CardContent } from "./CountryCard.styles";

import { Country } from "../../../types";

export interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Card>
      <Card.Section>
        <Image src={country.flags.svg} alt="Flag" />
      </Card.Section>

      <CardBody>
        <CardTitle>{country.name.common}</CardTitle>
        <CardContent>
          <div>
            <strong>Population:</strong>
            <span>{new Intl.NumberFormat().format(country.population)}</span>
          </div>
          <div>
            <strong>Region:</strong>
            <span>{country.region}</span>
          </div>
          <div>
            <strong>Capital:</strong>
            <span>{country.capital}</span>
          </div>
        </CardContent>
      </CardBody>
    </Card>
  );
};

export default CountryCard;
