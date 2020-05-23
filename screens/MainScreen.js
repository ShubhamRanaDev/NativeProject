import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import WeatherScreen from "../screens/WeatherScreen";



const MainScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results] = useResults();
  
 
  
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={require("../assets/back-image.jpg")}
        style={{
          width: "100%",
          flex: 1,
        }}
        resizeMode="cover"
      >
        <View>
          <View style={styles.container}>
            <SearchBar
              term={term}
              onTermChange={setTerm}
              onSubmit={() => {
                searchApi(term);
              }}
            />
          </View>
          <WeatherScreen result={results} />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default MainScreen;
