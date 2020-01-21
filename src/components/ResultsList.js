/*Uses withNavigation function for navigating from one page to another*/

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {/* <Text style={styles.totalResults}>Results: {results.length}</Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ShowResults")}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  list: {
    //marginLeft: 15,
    marginBottom: 15
  },
  totalResults: {
    margin: 15
  }
});

export default withNavigation(ResultList);
