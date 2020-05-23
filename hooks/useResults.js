import { useEffect, useState } from "react";
import WeatherApi from "../api/WeatherApi";

export default () => {
  const [results, setResults] = useState({});

  const searchApi = async (searchTerm) => {
    try {
      const response = await WeatherApi.get("/weather", {
        params: {
          q: searchTerm,
          units: "metric",
          appid: "d5f2506e7a55b0a90335036fd389c8c4",
        },
      });
      setResults(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("montreal");
  }, []);

  return [searchApi, results];
};
