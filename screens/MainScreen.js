import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import WeatherScreen from "../screens/WeatherScreen";

const MainScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <ImageBackground
      source={require("../assets/back-image.jpg")}
      style={{
        width: "100%",
        flex: 1,
      }}
      resizeMode="cover"
    >
      <View>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onSubmit={() => {
            searchApi(term);
          }}
        />
        <WeatherScreen result={results} />
        {/* {errorMessage ? <Text>{errorMessage}</Text> : ""} */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
