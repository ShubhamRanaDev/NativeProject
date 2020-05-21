import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import { Feather } from "@expo/vector-icons";

const WeatherScreen = ({ result }) => {
  //const [searchApi, results, errorMessage] = useResults();
  //console.log('hi weather');

  if (Object.keys(result).length === 0) {
    return null;
  }
  console.log("city changed to =" + result.name);
  //console.log(results)

  let dateTime = result.dt;
  let date = new Date(dateTime * 1000);
  let d = date.toLocaleDateString();
  let t = date.toLocaleTimeString();

  const degToCompass = (num) => {
    let val, arr;
    val = parseInt(num / 22.5 + 0.5);
    arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.subTitle}>{result.sys.country}</Text>
      <View style={styles.weatherInfoContainer}>
        <Text style={styles.degree}>
          {result.main.temp.toFixed(0)} {"\u00B0"}C
        </Text>
      </View>
      <Text style={styles.tempInfo}>
        {result.main.temp_max.toFixed(0)}
        {"\u00B0"} / {result.main.temp_min.toFixed(0)}
        {"\u00B0"} &nbsp; Feels like &nbsp;
        {result.main.feels_like.toFixed(0)}
        {"\u00B0"}
      </Text>
      <Text style={styles.weatherInfo}>{result.weather[0].main}</Text>
      <View style={styles.updateContainer}>
        <Text style={styles.updated}>
          updated {d}
          {"\n"}
          {t}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
          <Feather name="plus" color="white" size={28} />
        </TouchableOpacity>
      </View>
      <Card style={styles.card}>
        <Text style={styles.humidity}>Humidity</Text>
        <Text style={styles.humidity}>{result.main.humidity} %</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.humidity}>Wind Speed</Text>
        <Text style={styles.humidity}>{result.wind.speed} km/h</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.humidity}>Wind Direction</Text>
        <Text style={styles.humidity}>{degToCompass(result.wind.deg)}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 15,
    color: "white",
  },
  subTitle: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
  },
  weatherInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginBottom: 5,
    marginRight: 10,
  },
  degree: {
    fontSize: 50,
    color: "white",
  },
  tempInfo: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  weatherInfo: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  card: {
    backgroundColor: "transparent",
    margin: 10,
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  humidity: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },
  updateContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  updated: {
    fontSize: 12,
    color: "white",
  },
});

export default WeatherScreen;
