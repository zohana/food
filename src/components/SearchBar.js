import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ onTermChange, term, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={event => onTermSubmit(event.nativeEvent.term)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15
  },
  inputStyle: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
