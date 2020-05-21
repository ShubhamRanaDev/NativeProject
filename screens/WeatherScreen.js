import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import useResults from "../hooks/useResults";

const WeatherScreen = () => {
  const [searchApi, results, errorMessage] = useResults();
  console.log("hi weather");
  if (Object.keys(results).length === 0) {
    console.log("checking...");
    //searchApi("montreal");
    return null;
  }
  //console.log(results);

  return (
    <View>
      <Text style={styles.title}>{results.name}</Text>
      <Text> System ID : {results.sys.id}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `http://openweathermap.org/img/wn/${results.weather[0].icon}@4x.png`,
        }}
      />
      <Text>Weather : {results.weather[0].main}</Text>
      <Text>Temperature : {results.main.temp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginBottom: 5,
    backgroundColor: "grey",
  },
});

export default WeatherScreen;
