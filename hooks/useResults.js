import { useEffect, useState } from "react";
import WeatherApi from "../api/WeatherApi";

export default () => {
  const [results, setResults] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [term, setterm] = useState("montreal");

  const searchApi = async (searchTerm) => {
    setterm(searchTerm);
    try {
      const response = await WeatherApi.get("/weather", {
        params: {
          q: term,
          units: "metric",
          appid: "d5f2506e7a55b0a90335036fd389c8c4",
        },
      });
      const dt = response.data;
      setResults(dt);
      //console.log(results);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi(term);
  }, []);

  return [searchApi, results, errorMessage];
};
