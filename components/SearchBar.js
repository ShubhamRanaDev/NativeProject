import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={{ backgroundColor: "transparent" }}>
        <Button title="search" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
    color: "white",
  },
});

export default SearchBar;
