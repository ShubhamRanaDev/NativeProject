import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import WeatherApi from "../api/WeatherApi";

import SearchBar from "../components/SearchBar";

const MainScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("hi there");

    try {
      const response = await WeatherApi.get("?", {
        params: {
          q: searchTerm,
          appid: "d5f2506e7a55b0a90335036fd389c8c4",
        },
      });
      setResults(response.data);
      console.log(results);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("montreal");
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>Main Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
