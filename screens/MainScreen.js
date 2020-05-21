import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Tex } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";

const MainScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term);
          navigation.navigate("Weather");
          console.log(term);
        }}
      />
      {/* {errorMessage ? <Text>{errorMessage}</Text> : ""} */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
