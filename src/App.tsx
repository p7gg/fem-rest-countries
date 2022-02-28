import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useQuery } from "react-query";
import { ThemeProvider } from "styled-components";

import { Navigation } from "./components/layout";
import { Home, Country } from "./pages";

import useDarkMode from "./hooks/useDarkMode";

import { GlobalStyle, lightTheme, darkTheme } from "./styles";

import { Country as ICountry } from "./types";

const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  const { isDarkMode } = useDarkMode();

  const { data, isLoading, isError } = useQuery<ICountry[], Error>(
    ["countries", "list"],
    fetchCountries
  );

  return (
    <>
      <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route
                index
                element={
                  <Home
                    countries={data}
                    isLoading={isLoading}
                    isError={isError}
                  />
                }
              />
              <Route
                path="country/:countryCode"
                element={
                  <Country
                    countries={data}
                    isLoading={isLoading}
                    isError={isError}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
