import { useEffect, useState } from "react";
import WeatherApi from "../api/WeatherApi";

export default () => {
  const [results, setResults] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    //console.log("hi");
    try {
      const response = await WeatherApi.get("/weather", {
        params: {
          q: searchTerm,
          appid: "d5f2506e7a55b0a90335036fd389c8c4",
        },
      });
      const dt = response.data;
      setResults(dt);
      //console.log("checking results");
      // console.log(results);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("montreal");
  }, []);

  return [searchApi, results, errorMessage];
};
